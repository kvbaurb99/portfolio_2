"use client";
import styled, { keyframes } from "styled-components";

// Define TypeScript interfaces
interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItemType {
  title: string;
  href: string;
}

interface MenuItemProps {
  $index: number;
}

// Animation keyframes
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 280px;
  background: rgba(18, 18, 18, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  z-index: 100;
  transform-origin: top right;
  animation: ${slideIn} 0.3s ease forwards;

  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    border-radius: 0 0 12px 12px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
  animation: ${fadeIn} 0.2s ease forwards;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
`;

const MenuItem = styled.li<MenuItemProps>`
  padding: 0;
  margin: 0;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease forwards;
  animation-delay: ${(props) => props.$index * 0.05}s;
`;

const MenuLink = styled.a`
  display: block;
  padding: 0.75rem 1.5rem;
  color: #f0f0f0;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--primary, #059669);
    transform: scaleY(0);
    transition: transform 0.2s ease;
  }

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);

    &:before {
      transform: scaleY(1);
    }
  }
`;

const MenuSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  animation: ${fadeIn} 0.3s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

const MenuButton = styled.button`
  width: 100%;
  background: var(--primary, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--primary-dark, #047857);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(5, 150, 105, 0.2);
  }
`;

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  // Menu items
  const menuItems: MenuItemType[] = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about-me" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contact", href: "#contact" },
  ];

  // Click outside to close
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

// Export styled components for reuse or customization
export {
  MenuContainer,
  MenuList,
  MenuItem,
  MenuLink,
  MenuSection,
  MenuButton,
  MenuOverlay,
};
