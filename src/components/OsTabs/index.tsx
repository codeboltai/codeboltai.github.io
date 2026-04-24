import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './styles.css';

interface OsTabsProps {
  mac: React.ReactNode;
  windows: React.ReactNode;
  linux: React.ReactNode;
}

/**
 * Renders three OS tabs (macOS / Windows / Linux) with a shared groupId
 * so all OsTabs on the page switch together when the user picks an OS.
 */
export function OsTabs({ mac, windows, linux }: OsTabsProps) {
  return (
    <div className="cb-os-tabs">
      <Tabs groupId="operating-system">
        <TabItem value="mac" label="macOS" default>
          {mac}
        </TabItem>
        <TabItem value="windows" label="Windows">
          {windows}
        </TabItem>
        <TabItem value="linux" label="Linux">
          {linux}
        </TabItem>
      </Tabs>
    </div>
  );
}
