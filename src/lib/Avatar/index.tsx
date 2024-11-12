import styles from './avatar.module.css';

interface AvatarProps {
  imageSource: string;
  size?: number;
  alt?: string;
}
const Avatar = ({ imageSource, size = 64, alt = 'avatar' }: AvatarProps) => {
  return (
    <img
      className={styles.avatar_image}
      src={imageSource}
      alt={alt}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
