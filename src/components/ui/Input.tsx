import { JSX, splitProps } from 'solid-js';

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = (props: InputProps) => {
  const [local, others] = splitProps(props, ['label', 'error', 'fullWidth', 'class']);

  const baseClasses = 'px-3 py-2 border border-slate-3 rounded-lg bg-white dark:bg-black-2 dark:border-slate-6 focus:outline-none focus:ring-2 focus:ring-blue-5 focus:border-transparent transition-colors';
  const widthClass = local.fullWidth ? 'w-full' : '';
  const errorClass = local.error ? 'border-red-4 focus:ring-red-4' : '';

  return (
    <div class={`${local.fullWidth ? 'w-full' : ''}`}>
      {local.label && (
        <label class="block text-sm font-medium text-slate-7 dark:text-slate-3 mb-1">
          {local.label}
        </label>
      )}
      <input
        class={`${baseClasses} ${widthClass} ${errorClass} ${local.class || ''}`}
        {...others}
      />
      {local.error && (
        <p class="mt-1 text-sm text-red-5">{local.error}</p>
      )}
    </div>
  );
};

export default Input; 