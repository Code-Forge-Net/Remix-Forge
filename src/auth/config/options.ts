import { AUTH_STRATEGIES_KEYS } from "../authStrategies";

export type AUTH_STRATEGY_OPTION = {
  label: string;
  key: AUTH_STRATEGIES_KEYS;
  description: string;
  picked?: boolean;
};

export const AUTH_OPTIONS: AUTH_STRATEGY_OPTION[] = [
  { label: "OAuth2", key: "oauth2", description: "This will add the OAuth2 strategy" },
  { label: "Form", key: "form", description: "This will add the Form strategy", picked: false },
  { label: "GitHub", key: "github", description: "This will add the GitHub strategy", picked: false },
  { label: "Google", key: "google", description: "This will add the Google strategy", picked: false },
  { label: "Facebook", key: "facebook", description: "This will add the Facebook strategy", picked: false },
  { label: "Discord", key: "discord", description: "This will add the Discord strategy", picked: false },
  { label: "Microsoft", key: "microsoft", description: "This will add the Microsoft strategy", picked: false },
  { label: "Auth0", key: "auth0", description: "This will add the Auth0 strategy", picked: false },
  { label: "Twitter", key: "twitter", description: "This will add the Twitter strategy", picked: false },
];
