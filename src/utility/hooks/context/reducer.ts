export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "SHOW_PLUGIN_MODAL":
      return {
        ...state,
        pluginModal: true,
      };
  }
}
