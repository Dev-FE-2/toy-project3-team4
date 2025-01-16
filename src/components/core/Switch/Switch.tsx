import * as S from './Switch.styles';

type SwitchBackgroundColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'black'
  | 'disabled';
type SwitchRadius = 'default' | 'round';

export interface ISwitchVariant {
  $bgColor: SwitchBackgroundColor;
  $radius?: SwitchRadius;
}

type SwitchType = ISwitchVariant & React.InputHTMLAttributes<HTMLInputElement>;

const Switch = ({ $bgColor, $radius, ...props }: SwitchType) => {
  return (
    <S.Switch htmlFor={props.id} $bgColor={$bgColor} $radius={$radius}>
      <input type="checkbox" role="switch" {...props} />
      <span></span>
    </S.Switch>
  );
};

export default Switch;
