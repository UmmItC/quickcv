import { Icon } from '@iconify-icon/solid';

interface SectionHeaderProps {
  title: string;
  icon: string;
  iconColor: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div class="font-bold text-2xl flex items-center gap-3">
      <Icon
        icon={props.icon}
        width="25"
        class={`rounded-full p-[0.3rem] ${props.iconColor}`}
      />
      {props.title}
    </div>
  );
};

export default SectionHeader; 