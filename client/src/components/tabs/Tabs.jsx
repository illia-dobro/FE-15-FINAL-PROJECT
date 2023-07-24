import { Tab } from "@headlessui/react";
import PropTypes from "prop-types";

function Tabs({ tabs, classNameList, classNamePanel }) {
  const tabLabels = tabs.map((tab) => tab.label);
  const tabContent = tabs.map((tab) => tab.content);

  return (
    <Tab.Group>
        <Tab.List className={classNameList}>
          {tabLabels.map((label) => (
            <Tab key={label}>{label}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={classNamePanel}>
          {tabContent.map((content, index) => (
            <Tab.Panel key={index}>{content}</Tab.Panel>
          ))}
        </Tab.Panels>
    </Tab.Group>
  );
}
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  classNameList: PropTypes.string,
  classNamePanel: PropTypes.string,
};
export default Tabs;
