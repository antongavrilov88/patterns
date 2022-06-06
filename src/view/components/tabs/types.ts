interface TabProps {
    title: string;
    content: JSX.Element
}

interface TabsOwnProps  {
    tabs: TabProps[]
}

export type { TabProps, TabsOwnProps }