import { WorkspaceConfiguration } from "vscode";

export const logoutFileContent = (config: WorkspaceConfiguration) => {
  const runtimeDependency = config.get("runtimeDependency") || "@remix-run/node";
  return [
    `import type { ActionFunctionArgs } from "${runtimeDependency}"`,
    'import { authenticator } from "~/services/auth.server";',
    "",
    "export const action = async ({ request }: ActionFunctionArgs) => {",
    '  await authenticator.logout(request, { redirectTo: "/" });',
    "};",
  ].join("\n");
};
