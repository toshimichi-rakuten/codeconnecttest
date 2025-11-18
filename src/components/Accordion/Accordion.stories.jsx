import { Accordion, AccordionItem } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
};

export const BasicAccordion = () => (
  <div className="container">
    <h1>楽天カードフレームワーク - アコーディオン</h1>
    
    <h2>Basic Accordion</h2>
    <p>アコーディオンをクリックすると、アコーディオンの内容を展開・折りたたむことができます。</p>
    
    <Accordion id="accordionExample">
      <AccordionItem
        id="collapseOne"
        title="Accordion Item #1"
        defaultExpanded={true}
      >
        <strong>This is the first item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      
      <AccordionItem
        id="collapseTwo"
        title="Accordion Item #2"
        defaultExpanded={false}
      >
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      
      <AccordionItem
        id="collapseThree"
        title="Accordion Item #3"
        subtitle="Accordion subtitle"
        defaultExpanded={true}
      >
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
    </Accordion>
  </div>
);

export const FlushAccordion = () => (
  <div className="container">
    <h2>Flush Accordion</h2>
    <p>アコーディオンをクリックすると、アコーディオンの内容を展開・折りたたむことができます。<br />
    <code>.accordion-flush</code>を追加することで、デフォルトのいくつかの境界線と角丸を削除したスタイルを実装できます。</p>
    
    <Accordion flush id="accordionFlushExample">
      <AccordionItem
        id="flush-collapseOne"
        title="Accordion Item #1"
        defaultExpanded={true}
      >
        <strong>This is the first item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      
      <AccordionItem
        id="flush-collapseTwo"
        title="Accordion Item #2"
        defaultExpanded={false}
      >
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
      
      <AccordionItem
        id="flush-collapseThree"
        title="Accordion Item #3"
        subtitle="Accordion subtitle"
        defaultExpanded={true}
      >
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </AccordionItem>
    </Accordion>
  </div>
);
