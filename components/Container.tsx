import { SafeAreaView } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  const containerClass = className ? `${styles.container} ${className}` : styles.container;
  return <SafeAreaView className={containerClass}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1 m-6',
};
