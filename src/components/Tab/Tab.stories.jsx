import { Tab, TabList, TabButton, TabPanel } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
  },
};

export const BasicBorderedTab = () => (
  <div className="container my-5">
    <h1>楽天カードフレームワーク Tab コンポーネント</h1>
    <p>楽天カードフレームワークのTabコンポーネントの全バリエーションを示すデモページです。</p>

    <section className="mb-5">
      <h2>Basic Tab - Bordered (Version 2.0.0以降)</h2>
      <div className="mb-3">
        <Tab>
          <TabList variant="bordered">
            <TabButton id="tab1" controls="tabpanel1" variant="bordered" fillWidth>
              Tab 1
            </TabButton>
            <TabButton id="tab2" controls="tabpanel2" variant="bordered" fillWidth>
              Tab 2
            </TabButton>
            <TabButton id="tab3" controls="tabpanel3" variant="bordered" fillWidth>
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel id="tabpanel1" labelledBy="tab1">tabpanel 1</TabPanel>
          <TabPanel id="tabpanel2" labelledBy="tab2">tabpanel 2</TabPanel>
          <TabPanel id="tabpanel3" labelledBy="tab3">tabpanel 3</TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);

export const BorderedTabWithAnimation = () => (
  <div className="container my-5">
    <section className="mb-5">
      <h2>Basic Tab - Bordered (Version 5.0.0以降 - アニメーション付き)</h2>
      <div className="mb-3">
        <Tab animation>
          <TabList variant="bordered" animation>
            <TabButton
              id="animation-tab1"
              controls="animation-tabpanel1"
              variant="bordered"
              fillWidth
              aria-selected={false}
              tabIndex={-1}
            >
              Tab 1
            </TabButton>
            <TabButton
              id="animation-tab2"
              controls="animation-tabpanel2"
              variant="bordered"
              fillWidth
              aria-selected={false}
              tabIndex={-1}
            >
              Tab 2
            </TabButton>
            <TabButton
              id="animation-tab3"
              controls="animation-tabpanel3"
              variant="bordered"
              fillWidth
              aria-selected={true}
              tabIndex={0}
            >
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel id="animation-tabpanel1" labelledBy="animation-tab1" tabIndex={-1} hidden>
            tabpanel 1
          </TabPanel>
          <TabPanel id="animation-tabpanel2" labelledBy="animation-tab2" tabIndex={-1} hidden>
            tabpanel 2
          </TabPanel>
          <TabPanel id="animation-tabpanel3" labelledBy="animation-tab3" tabIndex={0}>
            tabpanel 3
          </TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);

export const BackgroundTab = () => (
  <div className="container my-5">
    <section className="mb-5">
      <h2>Background Tab (Version 2.0.0以降)</h2>
      <div className="mb-3">
        <Tab>
          <TabList variant="background">
            <TabButton
              id="tab-background-1"
              controls="tabpanel-background-1"
              variant="background"
              fillWidth
            >
              Tab 1
            </TabButton>
            <TabButton
              id="tab-background-2"
              controls="tabpanel-background-2"
              variant="background"
              fillWidth
              defaultActive
            >
              Tab 2
            </TabButton>
            <TabButton
              id="tab-background-3"
              controls="tabpanel-background-3"
              variant="background"
              fillWidth
            >
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel
            id="tabpanel-background-1"
            labelledBy="tab-background-1"
            variant="background"
          >
            tabpanel 1
          </TabPanel>
          <TabPanel
            id="tabpanel-background-2"
            labelledBy="tab-background-2"
            variant="background"
          >
            tabpanel 2
          </TabPanel>
          <TabPanel
            id="tabpanel-background-3"
            labelledBy="tab-background-3"
            variant="background"
          >
            tabpanel 3
          </TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);

export const BackgroundTabWithAnimation = () => (
  <div className="container my-5">
    <section className="mb-5">
      <h2>Background Tab (Version 5.0.0以降 - アニメーション付き)</h2>
      <div className="mb-3">
        <Tab animation>
          <TabList variant="background" animation>
            <TabButton
              role="tab"
              id="animation-tab-background-1"
              controls="animation-tabpanel-background-1"
              variant="background"
              fillWidth
              aria-selected={false}
              tabIndex={-1}
            >
              Tab 1
            </TabButton>
            <TabButton
              role="tab"
              id="animation-tab-background-2"
              controls="animation-tabpanel-background-2"
              variant="background"
              fillWidth
              aria-selected={true}
              tabIndex={0}
            >
              Tab 2
            </TabButton>
            <TabButton
              role="tab"
              id="animation-tab-background-3"
              controls="animation-tabpanel-background-3"
              variant="background"
              fillWidth
              aria-selected={false}
              tabIndex={-1}
            >
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel
            id="animation-tabpanel-background-1"
            labelledBy="animation-tab-background-1"
            variant="background"
            tabIndex={-1}
            hidden
          >
            tabpanel 1
          </TabPanel>
          <TabPanel
            id="animation-tabpanel-background-2"
            labelledBy="animation-tab-background-2"
            variant="background"
            tabIndex={0}
          >
            tabpanel 2
          </TabPanel>
          <TabPanel
            id="animation-tabpanel-background-3"
            labelledBy="animation-tab-background-3"
            variant="background"
            tabIndex={-1}
            hidden
          >
            tabpanel 3
          </TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);

export const BorderTab = () => (
  <div className="container my-5">
    <section className="mb-5">
      <h2>Border Tab (Version 2.0.0以降)</h2>
      <div className="mb-3">
        <Tab border>
          <TabList variant="background">
            <TabButton
              id="tab-border-1"
              controls="tabpanel-border-1"
              variant="background"
              fillWidth
            >
              Tab 1
            </TabButton>
            <TabButton
              id="tab-border-2"
              controls="tabpanel-border-2"
              variant="background"
              fillWidth
            >
              Tab 2
            </TabButton>
            <TabButton
              id="tab-border-3"
              controls="tabpanel-border-3"
              variant="background"
              fillWidth
            >
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel
            id="tabpanel-border-1"
            labelledBy="tab-border-1"
            variant="background"
          >
            tabpanel 1
          </TabPanel>
          <TabPanel
            id="tabpanel-border-2"
            labelledBy="tab-border-2"
            variant="background"
          >
            tabpanel 2
          </TabPanel>
          <TabPanel
            id="tabpanel-border-3"
            labelledBy="tab-border-3"
            variant="background"
          >
            tabpanel 3
          </TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);

export const BorderTabWithAnimation = () => (
  <div className="container my-5">
    <section className="mb-5">
      <h2>Border Tab (Version 5.0.0以降 - アニメーション付き)</h2>
      <div className="mb-3">
        <Tab animation border>
          <TabList variant="background" animation>
            <TabButton
              id="animation-tab-border-1"
              controls="animation-tabpanel-border-1"
              variant="background"
              fillWidth
              aria-selected={true}
              tabIndex={0}
            >
              Tab 1
            </TabButton>
            <TabButton
              id="animation-tab-border-2"
              controls="animation-tabpanel-border-2"
              variant="background"
              fillWidth
              aria-selected={false}
              tabIndex={-1}
            >
              Tab 2
            </TabButton>
            <TabButton
              id="animation-tab-border-3"
              controls="animation-tabpanel-border-3"
              variant="background"
              fillWidth
              aria-selected={false}
              tabIndex={-1}
            >
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel
            id="animation-tabpanel-border-1"
            labelledBy="animation-tab-border-1"
            variant="background"
            tabIndex={0}
          >
            tabpanel 1
          </TabPanel>
          <TabPanel
            id="animation-tabpanel-border-2"
            labelledBy="animation-tab-border-2"
            variant="background"
            tabIndex={-1}
            hidden
          >
            tabpanel 2
          </TabPanel>
          <TabPanel
            id="animation-tabpanel-border-3"
            labelledBy="animation-tab-border-3"
            variant="background"
            tabIndex={-1}
            hidden
          >
            tabpanel 3
          </TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);

export const RoundTab = () => (
  <div className="container my-5">
    <section className="mb-5">
      <h2>Round Tab (Version 2.0.0以降)</h2>
      <div className="mb-3">
        <Tab>
          <TabList variant="round">
            <TabButton id="tab-round-1" controls="tabpanel-round-1" variant="round">
              Tab 1
            </TabButton>
            <TabButton id="tab-round-2" controls="tabpanel-round-2" variant="round">
              Tab 2
            </TabButton>
            <TabButton id="tab-round-3" controls="tabpanel-round-3" variant="round">
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel id="tabpanel-round-1" labelledBy="tab-round-1" variant="round">
            tabpanel 1
          </TabPanel>
          <TabPanel id="tabpanel-round-2" labelledBy="tab-round-2" variant="round">
            tabpanel 2
          </TabPanel>
          <TabPanel id="tabpanel-round-3" labelledBy="tab-round-3" variant="round">
            tabpanel 3
          </TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);

export const AlignmentTab = () => (
  <div className="container my-5">
    <section className="mb-5">
      <h2>Alignment Tab (Version 2.0.0以降)</h2>
      <div className="mb-3">
        <Tab>
          <TabList variant="background" alignment>
            <TabButton
              id="tab-alignment-1"
              controls="tabpanel-alignment-1"
              variant="background"
            >
              Tab 1
            </TabButton>
            <TabButton
              id="tab-alignment-2"
              controls="tabpanel-alignment-2"
              variant="background"
            >
              Tab 2
            </TabButton>
            <TabButton
              id="tab-alignment-3"
              controls="tabpanel-alignment-3"
              variant="background"
            >
              Tab 3
            </TabButton>
          </TabList>
          <TabPanel
            id="tabpanel-alignment-1"
            labelledBy="tab-alignment-1"
            variant="background"
          >
            tabpanel 1
          </TabPanel>
          <TabPanel
            id="tabpanel-alignment-2"
            labelledBy="tab-alignment-2"
            variant="background"
          >
            tabpanel 2
          </TabPanel>
          <TabPanel
            id="tabpanel-alignment-3"
            labelledBy="tab-alignment-3"
            variant="background"
          >
            tabpanel 3
          </TabPanel>
        </Tab>
      </div>
    </section>
  </div>
);
