import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, variant = 'primary', ...touchableProps }, ref) => {
  const buttonStyle = variant === 'secondary' ? styles.secondaryButton : styles.button;
  const textStyle = variant === 'secondary' ? styles.secondaryButtonText : styles.buttonText;

  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${buttonStyle} ${touchableProps.className}`}>
      <Text className={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  secondaryButton: 'items-center bg-gray-200 rounded-[28px] shadow-md p-4',
  secondaryButtonText: 'text-gray-700 text-lg font-semibold text-center',
};
