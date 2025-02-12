import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
} from "@workspace/ui/components/sidebar";

import { LabCombobox } from "@workspace/ui/components/sidebar/lab-combobox";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <p className="text-xl mb-4 mt-6 ml-2.5">Settings</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="ml-2.5">
          <h1 className="mb-2">Select a ...</h1>
          <LabCombobox />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
