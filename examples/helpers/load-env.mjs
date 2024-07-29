import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Generates a settings object by merging the default settings with the contents of `.env`.
 *
 * @param {object} defaultSettings - The default settings object.
 * @returns {object} - The merged settings object.
 */
export function loadSettings(defaultSettings) {
  const envVariables = loadEnv();
  if (envVariables) {
    return { ...defaultSettings, ...envVariables };
  } else {
    return defaultSettings;
  }
}

/**
 * Loads environment variables from a .env file located in the examples directory.
 * @returns {object|null} - An object containing the loaded environment variables, or null if the .env file does not exist.
 */
export function loadEnv() {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const envPath = path.resolve(dirname, '../.env');

  if (fs.existsSync(envPath)) {
    return loadEnvFromPath(envPath);
  } else {
    return null;
  }
}

/**
 * Loads environment variables from a file.
 * @param {string} filePath - The path to the file containing environment variables.
 * @returns {object} - An object containing the loaded environment variables.
 */
export function loadEnvFromPath(filePath) {
  let env = {};
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');

  for (const line of lines) {
    // Remove comments and trim whitespace
    const trimmedLine = line.replace(/#.*$/, '').trim();

    if (!trimmedLine) {
      continue;
    }

    const [key, ...valueParts] = trimmedLine.split('=');
    if (!key || valueParts.length === 0) {
      continue;
    }

    let value = valueParts.join('=').trim();

    // Remove surrounding quotes if they exist
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key.trim()] = value;
  }

  return env;
}
