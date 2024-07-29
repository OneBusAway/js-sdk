import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function loadSettings(defaultSettings) {
  const envVariables = loadEnv();
  if (envVariables) {
    return { ...defaultSettings, ...envVariables };
  } else {
    return defaultSettings;
  }
}

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
