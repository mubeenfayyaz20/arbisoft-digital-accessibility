import React from "react";
import { Metadata } from "next";
import AccessibleTable from "../components/Table";

export const metadata: Metadata = {
  title: "Mac Shortcut Keys | Arbi Digital Accessibility",
  description:
    "A complete list of accessibility keyboard shortcuts for Mac, helping users navigate, control, and interact with macOS using VoiceOver and other assistive features.",
};
const AllTools = () => {
  return (
    <>
      <div className="text-center">
        <h1
          className="text-center largeHeading"
          aria-label=" VoiceOver Keyboard Shortcuts on a Mac"
        >
          <span
            aria-hidden="true"
            className="flex gap-4 items-center justify-center"
          >
            VoiceOver Keyboard Shortcuts on a<span className="pills">Mac</span>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <AccessibleTable
          caption="Basic VoiceOver Commands"
          headers={["Action", "Shortcut"]}
          rows={[
            ["Turn VoiceOver on/off", "Command + F5"],
            ["Open VoiceOver Utility", "Control + Option + F8"],
            ["Open VoiceOver Help Menu", "Control + Option + H"],
            ["Open VoiceOver Commands Menu", "Control + Option + H then H"],
            ["Pause or resume speech", "Control"],
            ["Read entire page", "Control + Option + A"],
            ["Read current line", "Control + Option + L"],
            ["Read current word", "Control + Option + W"],
            ["Read current character", "Control + Option + C"],
            ["Spell current word", "Control + Option + W twice"],
          ]}
        />

        <AccessibleTable
          caption="Navigation Commands"
          headers={["Action", "Shortcut"]}
          rows={[
            ["Move to next item", "Control + Option + Right Arrow"],
            ["Move to previous item", "Control + Option + Left Arrow"],
            ["Move down in a list or group", "Control + Option + Down Arrow"],
            ["Move up in a list or group", "Control + Option + Up Arrow"],
            [
              "Interact with item/group",
              "Control + Option + Shift + Down Arrow",
            ],
            ["Stop interacting", "Control + Option + Shift + Up Arrow"],
            ["Activate (click) selected item", "Control + Option + Spacebar"],
            [
              "Read current item",
              "Control + Option + F3 or Control + Option + Fn + Left Arrow",
            ],
            ["Read from current item to end", "Control + Option + A"],
          ]}
        />

        <AccessibleTable
          caption="Web Navigation"
          headers={["Action", "Shortcut"]}
          rows={[
            ["Jump to next heading", "Control + Option + Command + H"],
            ["Jump to next link", "Control + Option + Command + L"],
            ["Jump to next form control", "Control + Option + Command + J"],
            ["Jump to next table", "Control + Option + Command + T"],
            ["Jump to next list", "Control + Option + Command + X"],
            ["Show Rotor (Quick Nav tool)", "Control + Option + U"],
          ]}
        />

        <AccessibleTable
          caption="Reading Text"
          headers={["Action", "Shortcut"]}
          rows={[
            ["Read entire page", "Control + Option + A"],
            ["Read current line", "Control + Option + L"],
            ["Read current word", "Control + Option + W"],
            ["Read current character", "Control + Option + C"],
            ["Spell current word", "Control + Option + W twice"],
          ]}
        />

        <AccessibleTable
          caption="Quick Nav (Navigate without VO keys)"
          headers={["Action", "Shortcut"]}
          rows={[
            ["Navigate to next item", "Right Arrow"],
            ["Navigate to previous item", "Left Arrow"],
            ["Navigate by heading", "Up Arrow + Right Arrow"],
            ["Navigate by link", "Up Arrow + Left Arrow"],
          ]}
        />
      </div>
    </>
  );
};

export default AllTools;
