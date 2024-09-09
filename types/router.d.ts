/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/ForgetPassword` | `/HomeScreenMain` | `/ItineraryStackNav` | `/MyTabs` | `/OnBoard` | `/OnBoard02` | `/OnBoard03` | `/Personalize01` | `/Personalize02` | `/Personalize03` | `/SearchBar` | `/SignIn` | `/SignUp` | `/SplashScreen` | `/VisaApproval1` | `/VisaApproval2` | `/_sitemap` | `/layout`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
