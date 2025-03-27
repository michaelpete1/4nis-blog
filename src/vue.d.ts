declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<unknown, object, unknown>;
  export default component;
}
