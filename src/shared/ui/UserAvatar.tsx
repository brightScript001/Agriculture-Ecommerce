import { useSelector } from "react-redux";
import { AppState } from "store";
import styled from "styled-components";

function UserAvatar() {
  const user = useSelector((state: AppState) => state.auth);
  const fullName = `${user.user?.firstName} ${user.user?.lastName}`;
  const avatar = user.user?.avatar;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "/src/assets/images/default-avatar.png"}
        alt={`Avatar of ${fullName}` || "user avatar"}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: var(--font-size-md);
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
