import { JSX, splitProps } from 'solid-js';
import { Icon } from '@iconify-icon/solid';

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const [local, others] = splitProps(props, [
    'variant',
    'size',
    'icon',
    'iconPosition',
    'loading',
    'children',
    'class',
  ]);

  const getVariantClasses = () => {
    switch (local.variant) {
      case 'primary':
        return 'bg-blue-6 text-white-1 hover:bg-blue-7';
      case 'secondary':
        return 'bg-slate-2 text-slate-8 hover:bg-slate-3 dark:bg-black-3 dark:text-white-2';
      case 'danger':
        return 'bg-red-5 text-white-1 hover:bg-red-6';
      case 'ghost':
        return 'bg-transparent hover:bg-slate-1 dark:hover:bg-black-2';
      default:
        return 'bg-blue-6 text-white-1 hover:bg-blue-7';
    }
  };

  const getSizeClasses = () => {
    switch (local.size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2';
    }
  };

  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-5 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      class={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${local.class || ''}`}
      disabled={local.loading}
      {...others}
    >
      {local.loading && <Icon icon="eos-icons:loading" class="animate-spin" />}
      {local.icon && local.iconPosition !== 'right' && <Icon icon={local.icon} />}
      {local.children}
      {local.icon && local.iconPosition === 'right' && <Icon icon={local.icon} />}
    </button>
  );
};

export default Button; 