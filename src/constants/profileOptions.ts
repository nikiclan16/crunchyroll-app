interface OptionsProps {
  option: string;
  selected?: string;
  switcher?: boolean;
  title?: string;
  arrow?: boolean;
}

export const profileOptions: OptionsProps[] = [
  {
    option: 'Plan de suscripción',
  },
  {
    option: 'Notificaciones',
  },
  {
    option: 'Mi perfil de suscripción',
  },
  {
    option: 'Cambiar Email',
  },
  {
    option: 'Cambiar contraseña',
  },
  {
    option: 'Canjear código promocional',
    arrow: true,
  },
  {
    title: 'PREFERENCIAS',
    option: 'Idioma del audio',
    selected: 'Español (América Latina)',
  },
  {
    option: 'Subtítulos/Idioma de los CC',
    selected: 'Español (América...',
  },
  {
    option: 'Mostrar closed Captions',
    switcher: true,
  },
  {
    title: 'EXPERIENCIA DE LA APP',
    option: 'Utilizar conexión de datos',
    switcher: true,
  },
  {
    option: 'Mostrar Contenido Adulto',
    switcher: true,
  },
  {
    option: 'Configuración de notificaciones',
  },
  {
    option: 'Aplicaciones conectadas',
  },
  {
    title: 'PRIVACIDAD',
    option: 'Do not sell my personal information',
  },
  {
    option: 'Borrar mi cuenta',
  },
  {
    title: 'SOBRE...',
    option: '¿Necesitas ayuda?',
    arrow: true,
  },
];
