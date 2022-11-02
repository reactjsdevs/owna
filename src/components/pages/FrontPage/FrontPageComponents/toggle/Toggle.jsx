import {
  useDisclosureState,
  Disclosure,
  DisclosureContent,
} from "reakit/Disclosure";

export const Toggle = ({ visible = false, title, renderContent }) => {
  const disclosure = useDisclosureState({ visible });
  return (
    <>
      <Disclosure {...disclosure} className="outline-none focus:outline-none">
        {title}
      </Disclosure>
      <DisclosureContent {...disclosure}>{renderContent}</DisclosureContent>
    </>
  );
};
