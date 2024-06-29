// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface References {
  agencies?: Array<References.Agency>;

  routes?: Array<References.Route>;

  situations?: Array<References.Situation>;

  stops?: Array<References.Stop>;

  stopTimes?: Array<unknown>;

  trips?: Array<References.Trip>;
}

export namespace References {
  export interface Agency {
    id: string;

    name: string;

    timezone: string;

    url: string;

    disclaimer?: string;

    email?: string;

    fareUrl?: string;

    lang?: string;

    phone?: string;

    privateService?: boolean;
  }

  export interface Route {
    id?: string;

    agencyId?: string;

    color?: string;

    description?: string;

    longName?: string;

    nullSafeShortName?: string;

    shortName?: string;

    textColor?: string;

    type?: number;

    url?: string;
  }

  export interface Situation {
    /**
     * Unique identifier for the situation.
     */
    id: string;

    /**
     * Unix timestamp of when this situation was created.
     */
    creationTime: number;

    activeWindows?: Array<Situation.ActiveWindow>;

    allAffects?: Array<Situation.AllAffect>;

    /**
     * Message regarding the consequence of the situation.
     */
    consequenceMessage?: string;

    consequences?: Array<Situation.Consequence>;

    description?: Situation.Description;

    publicationWindows?: Array<Situation.PublicationWindow>;

    /**
     * Reason for the service alert, taken from TPEG codes.
     */
    reason?:
      | 'equipmentReason'
      | 'environmentReason'
      | 'personnelReason'
      | 'miscellaneousReason'
      | 'securityAlert';

    /**
     * Severity of the situation.
     */
    severity?: string;

    summary?: Situation.Summary;

    url?: Situation.URL;
  }

  export namespace Situation {
    export interface ActiveWindow {
      /**
       * Start time of the active window as a Unix timestamp.
       */
      from?: number;

      /**
       * End time of the active window as a Unix timestamp.
       */
      to?: number;
    }

    export interface AllAffect {
      /**
       * Identifier for the agency.
       */
      agencyId?: string;

      /**
       * Identifier for the application.
       */
      applicationId?: string;

      /**
       * Identifier for the direction.
       */
      directionId?: string;

      /**
       * Identifier for the route.
       */
      routeId?: string;

      /**
       * Identifier for the stop.
       */
      stopId?: string;

      /**
       * Identifier for the trip.
       */
      tripId?: string;
    }

    export interface Consequence {
      /**
       * Condition of the consequence.
       */
      condition?: string;

      conditionDetails?: Consequence.ConditionDetails;
    }

    export namespace Consequence {
      export interface ConditionDetails {
        diversionPath?: ConditionDetails.DiversionPath;

        diversionStopIds?: Array<string>;
      }

      export namespace ConditionDetails {
        export interface DiversionPath {
          /**
           * Length of the diversion path.
           */
          length?: number;

          /**
           * Levels of the diversion path.
           */
          levels?: string;

          /**
           * Points of the diversion path.
           */
          points?: string;
        }
      }
    }

    export interface Description {
      /**
       * Language of the description.
       */
      lang?: string;

      /**
       * Longer description of the situation.
       */
      value?: string;
    }

    export interface PublicationWindow {
      /**
       * Start time of the time window as a Unix timestamp.
       */
      from: number;

      /**
       * End time of the time window as a Unix timestamp.
       */
      to: number;
    }

    export interface Summary {
      /**
       * Language of the summary.
       */
      lang?: string;

      /**
       * Short summary of the situation.
       */
      value?: string;
    }

    export interface URL {
      /**
       * Language of the URL.
       */
      lang?: string;

      /**
       * URL for more information about the situation.
       */
      value?: string;
    }
  }

  export interface Stop {
    id: string;

    code: string;

    lat: number;

    lon: number;

    name: string;

    direction?: string;

    locationType?: number;

    parent?: string;

    routeIds?: Array<string>;

    staticRouteIds?: Array<string>;

    wheelchairBoarding?: string;
  }

  export interface Trip {
    id: string;

    routeId: string;

    blockId?: string;

    directionId?: string;

    peakOffpeak?: number;

    routeShortName?: string;

    serviceId?: string;

    shapeId?: string;

    timeZone?: string;

    tripHeadsign?: string;

    tripShortName?: string;
  }
}

export interface ResponseWrapper {
  code: number;

  currentTime: number;

  text: string;

  version: number;
}
