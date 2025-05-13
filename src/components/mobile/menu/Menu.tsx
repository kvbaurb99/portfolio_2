import {
  MenuButton,
  MenuContainer,
  MenuItem,
  MenuLink,
  MenuList,
  MenuOverlay,
  MenuSection,
} from "./Menu.styled";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItemType {
  title: string;
  href: string;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuItems: MenuItemType[] = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about-me" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contact", href: "#contact" },
  ];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <MenuOverlay onClick={handleOverlayClick} />
      <MenuContainer>
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem key={item.href} $index={index + 1}>
              <MenuLink href={item.href} onClick={onClose}>
                {item.title}
              </MenuLink>
            </MenuItem>
          ))}
        </MenuList>

        <MenuSection>
          <MenuButton onClick={onClose}>Download Resume</MenuButton>
        </MenuSection>
      </MenuContainer>
    </>
  );
};

export default Menu;
