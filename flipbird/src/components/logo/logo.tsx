import { component$, useStylesScoped$ } from '@builder.io/qwik';
import '../../../node_modules/purecss/build/grids.css'

export interface LogoProps {

}

export const Logo = component$<LogoProps>((props) => {


  return (
<div class="pure-g">
    <div class="pure-u-1-3"><p>Thirds</p></div>
    <div class="pure-u-1-3"><p>Thirds</p></div>
    <div class="pure-u-1-3"><p>Thirds</p></div>
</div>
  );
});


