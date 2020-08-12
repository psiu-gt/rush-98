/**
 * Discord card with call-to-action button.
 * This uses the Windows 95 React Component library.
 */

import React from "react";
import { ThemeProvider } from "styled-components";
import { themes, Window, WindowContent, WindowHeader, Button } from "react95";

// Forgive me for my sins of using jQuery.
export const actions = {
  onClick: () => {
    $("#discordModal").modal("toggle");
  },
};

const Discord = () => (
  <div>
    <ThemeProvider theme={themes.default}>
      <Window style={{ width: 400 }}>
        <WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>PsiU.exe</span>
          <Button
            style={{ marginRight: "-6px", marginTop: "1px" }}
            size={"sm"}
            square
          >
            <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <img
            style={{ width: "100%", height: "1uto", display: "block" }}
            src="https://i.imgur.com/ZOKp8LH.jpg"
          />
          <Button {...actions} size="lg">
            Join the Discord
          </Button>
        </WindowContent>
      </Window>
    </ThemeProvider>
  </div>
);

export default Discord;
