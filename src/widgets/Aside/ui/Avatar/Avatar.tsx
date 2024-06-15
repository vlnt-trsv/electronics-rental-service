import { User } from "@/shared/assets";

interface IAvatar {
  src?: string;
  alt?: string;
  initials?: string;
  size?: number;
  className?: string;
}

const Avatar = ({
  src,
  alt = "avatar",
  initials,
  size = 50,
  className,
}: IAvatar) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: size / 2,
    color: "white",
    backgroundColor: "rgba(51, 213, 223, 0.15)",
    overflow: "hidden",
  };

  return (
    <div className={className} style={avatarStyle}>
      {src ? (
        <img src={src} alt={alt} style={{ width: "100px", height: "100px" }} />
      ) : initials ? (
        <span>{initials}</span>
      ) : (
        <User style={{ fontSize: size / 2 }} />
      )}
    </div>
  );
};

export default Avatar;
