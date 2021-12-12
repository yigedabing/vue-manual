export interface IMenuItem {
  id: string;
  name: string;
  path: string;
}

export interface IOpenConfirmDialogOption {
  message: string;
  title?: string;
  ok?: string;
  cancel?: string;
  type?: 'info' | 'error' | 'success' | 'warning';
}
