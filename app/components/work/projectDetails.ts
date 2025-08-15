import {
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiReact,
    SiPython
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];

  github: string;
  demo: string;
  image: string | string[];
  available: boolean;
  area: string;
};

export type AreaProps = {
  id: string;
  name: string;
  description: string;
};

export const areas: AreaProps[] = [
    {
        id: "operaciones",
        name: "Operaciones",
        description: "Proyectos enfocados en la optimización de procesos y recursos para garantizar la máxima eficiencia."
    },

    {
        id: "rrhh",
        name: "Recursos Humanos",
        description: "Herramientas para la gestión del talento humano, desarrollo profesional y bienestar laboral."
    },
    {
        id: "seguridad",
        name: "Seguridad",
        description: "Sistemas para la prevención de riesgos y protección integral de personal y activos."
    },
    {
        id: "compras",
        name: "Compras",
        description: "Proyectos para la gestión y optimización del proceso de compras."
    },
    {
        id: "financiera",
        name: "Financiera",
        description: "Herramientas para la gestión financiera y contable de la organización."
    },
    {
        id: "general",
        name: "General",
        description: "Proyectos de propósito general para la organización."
    },
    {
        id: "mejoracontinua",
        name: "Mejora Continua",
        description: "Proyectos enfocados en la mejora continua de procesos y servicios."
    },
    {
        id: "pesv",
        name: "PESV",
        description: "Plan Estratégico de Seguridad Vial."
    },
    {
        id: "REMANUFACTURA",
        name: "REMANUFACTURA",
        description: "Proyectos relacionados con el proceso de REMANUFACTURA."
    },
    {
        id: "sgi",
        name: "SGI",
        description: "Sistema de Gestión Integrado que coordina calidad, medio ambiente y seguridad."
    },
    {
        id: "svg",
        name: "SVG",
        description: "Supervisión y gestión de procesos específicos y control de calidad."
    },
    {
        id: "vigilancia",
        name: "Vigilancia",
        description: "Sistemas para el monitoreo y control de seguridad física."
    }
];

export const projects: ProjectProps[] = [
    // Operaciones
    { id: 1, name: "Sistema de Indicadores", description: "Dashboard integral de indicadores operativos.", technologies: [SiReact, SiTypescript, SiNextdotjs], github: "", demo: "", image: ["/proyectos/operaciones/Indicador1.png", "/proyectos/operaciones/Indicador2.png"], available: true, area: "operaciones" },
    { id: 2, name: "Solicitud de Permisos", description: "Plataforma digital para la gestión de solicitudes de permisos.", technologies: [SiReact, SiTypescript, SiPostgresql], github: "", demo: "", image: ["/proyectos/operaciones/Solicitud-permisos1.png", "/proyectos/operaciones/Solicitud-permisos2.png", "/proyectos/operaciones/Solicitud-permisos3.png", "/proyectos/operaciones/Solicitud-permisos4.png"], available: true, area: "operaciones" },
    { id: 3, name: "Sistema Turnovia", description: "Gestión avanzada de turnos y horarios de trabajo.", technologies: [SiReact, SiPython, SiMongodb], github: "", demo: "", image: ["/proyectos/operaciones/Turnovia1.png", "/proyectos/operaciones/Turnovia2.png", "/proyectos/operaciones/Turnovia3.png"], available: true, area: "operaciones" },
    { id: 4, name: "Programación de Operadores", description: "Sistema para la programación y asignación de operadores.", technologies: [SiReact, SiPython, SiPostgresql], github: "", demo: "", image: "/proyectos/operaciones/ProgramacionOperadores.png", available: true, area: "operaciones" },
    { id: 5, name: "Informe de Servicios", description: "Generación automatizada de informes de servicios.", technologies: [SiPython, SiReact, SiPostgresql], github: "", demo: "", image: "/proyectos/operaciones/InformeServicios.png", available: true, area: "operaciones" },
    { id: 6, name: "Indicador Franja Horaria", description: "Indicador de servicios por franja horaria.", technologies: [SiPython, SiReact, SiPostgresql], github: "", demo: "", image: "/proyectos/operaciones/IndicadorFranja.png", available: true, area: "operaciones" },
    { id: 7, name: "Fotos Flota", description: "Registro fotográfico de la flota vehicular.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: ["/proyectos/operaciones/FotosFlota1.png", "/proyectos/operaciones/FotosFlota2.png"], available: true, area: "operaciones" },
    { id: 8, name: "Revisión Programación", description: "Herramienta para la revisión de la programación de operadores.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/operaciones/RevisiónProgramación.png", available: true, area: "operaciones" },
    { id: 9, name: "Vehicar", description: "Gestión y monitoreo de vehículos.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: ["/proyectos/operaciones/Vehicar1.png", "/proyectos/operaciones/Vehicar2.png"], available: true, area: "operaciones" },

    // RRHH
    { id: 12, name: "Indicador IVMS", description: "Indicador de sistema de monitoreo de vehículos.", technologies: [SiReact, SiTypescript, SiNextdotjs], github: "", demo: "", image: "/proyectos/RRHH/IVMS.png", available: true, area: "rrhh" },
    { id: 13, name: "Evaluación de Desempeño", description: "Plataforma para la evaluación de desempeño de empleados.", technologies: [SiReact, SiMongodb], github: "", demo: "", image: ["/proyectos/RRHH/EvaluaciónDesempeño1.png", "/proyectos/RRHH/EvaluaciónDesempeño2.png"], available: true, area: "rrhh" },
    { id: 14, name: "Revisión de Nómina", description: "Herramienta para la revisión y validación de la nómina.", technologies: [SiReact, SiMongodb], github: "", demo: "", image: ["/proyectos/RRHH/RevisionNomina1.png"], available: true, area: "rrhh" },
    { id: 15, name: "Vehículos Registrados", description: "Registro y gestión de vehículos de empleados.", technologies: [SiReact, SiMongodb], github: "", demo: "", image: ["/proyectos/RRHH/VehiculosRegistrados.png", "/proyectos/RRHH/VehiculosRegistrados2.png"], available: true, area: "rrhh" },
    { id: 16, name: "Revisión de Programación RRHH", description: "Herramienta para la revisión de la programación de personal.", technologies: [SiReact, SiMongodb], github: "", demo: "", image: "/proyectos/RRHH/RevisionProgramacion.png", available: true, area: "rrhh" },
    { id: 17, name: "Plano Nómina", description: "Generación de plano para el pago de nómina.", technologies: [SiReact, SiMongodb], github: "", demo: "", image: "/proyectos/RRHH/PlanoNomina.png", available: true, area: "rrhh" },
    { id: 18, name: "Formulario Datos Generales", description: "Formulario para la recolección de datos generales de empleados.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/RRHH/FormularioDatosGenerales.png", available: true, area: "rrhh" },

    // Seguridad
    { id: 19, name: "Carro Taller", description: "Gestión y control de vehículos de taller.", technologies: [SiReact, SiPython], github: "", demo: "", image: ["/proyectos/Seguridad/CarroTaller1.jpg", "/proyectos/Seguridad/CarroTaller2.jpg", "/proyectos/Seguridad/CarroTaller3.jpg", "/proyectos/Seguridad/CarroTaller4.jpg", "/proyectos/Seguridad/Carrotaller5.jpg"], available: true, area: "seguridad" },
    { id: 20, name: "Control de Activos", description: "Sistema para el control y seguimiento de activos.", technologies: [SiReact, SiPython], github: "", demo: "", image: ["/proyectos/Seguridad/ControlActivos1.jpg", "/proyectos/Seguridad/ControlActivos2.jpg", "/proyectos/Seguridad/ControlActivos3.jpg", "/proyectos/Seguridad/ControlActivos4.jpg", "/proyectos/Seguridad/ControlActivos5.jpg"], available: true, area: "seguridad" },
    { id: 21, name: "Gestión de Tareas", description: "Herramienta para la gestión y asignación de tareas.", technologies: [SiReact, SiPython], github: "", demo: "", image: ["/proyectos/Seguridad/GestionTareas1.jpg", "/proyectos/Seguridad/GestionTareas2.jpg", "/proyectos/Seguridad/GestionTareas3.jpg", "/proyectos/Seguridad/GestionTareas4.jpg", "/proyectos/Seguridad/GestionTareas5.jpg"], available: true, area: "seguridad" },
    { id: 22, name: "Inspecciones", description: "Sistema para la realización y seguimiento de inspecciones.", technologies: [SiReact, SiPython], github: "", demo: "", image: ["/proyectos/Seguridad/Inspecciones1.jpg", "/proyectos/Seguridad/Inspecciones2.jpg"], available: true, area: "seguridad" },

    // Compras
    { id: 23, name: "Envío de Compras", description: "Gestión de envíos de compras.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: ["/proyectos/Compras/EnvioCompras1.jpg", "/proyectos/Compras/EnvioCompras2.jpg"], available: true, area: "compras" },
    { id: 24, name: "Sugerido de Compras", description: "Sistema de sugerencia de compras.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: ["/proyectos/Compras/SugeridoCompras1.png", "/proyectos/Compras/SugeridoCompras2.png"], available: true, area: "compras" },

    // Financiera
    { id: 25, name: "Archivos de Video", description: "Gestión de archivos de video.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/Financiera/ArchivosVideo.png", available: true, area: "financiera" },
    { id: 26, name: "Causación de Facturas", description: "Sistema para la causación de facturas.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/Financiera/CausaciónFacturas.png", available: true, area: "financiera" },

    // General
    { id: 27, name: "Novedades de Programación", description: "Registro de novedades en la programación.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/General/NovedadesProgramacion.png", available: true, area: "general" },

    // Mejora Continua
    { id: 28, name: "Operatividad de Cámaras", description: "Monitoreo de la operatividad de cámaras.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/MejoraContinua/OperatividadCamaras.png", available: true, area: "mejoracontinua" },

    // PESV
    { id: 29, name: "Alarmas Sonia", description: "Gestión de alarmas del sistema Sonia.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/PESV/AlarmasSonia.png", available: true, area: "pesv" },
    { id: 30, name: "Control Disciplinario", description: "Sistema para el control disciplinario.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: ["/proyectos/PESV/ControlDisciplinario1.png", "/proyectos/PESV/ControlDisciplinario2.png"], available: true, area: "pesv" },
    { id: 31, name: "Control Revisión Efectividad", description: "Control y revisión de la efectividad.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/PESV/ControlRevisionEfectividad.png", available: true, area: "pesv" },
    { id: 32, name: "Árchivo de Revisión de Efectividades", description: "Revisión de la efectividad de procesos.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: "/proyectos/PESV/EfectividadRevisión.png", available: true, area: "pesv" },

    // REMANUFACTURA
    { id: 33, name: "Componentes Reparados", description: "Seguimiento de componentes reparados.", technologies: [SiReact, SiTypescript], github: "", demo: "", image: ["/proyectos/Remanofactura/ComponentesReparados1.jpg", "/proyectos/Remanofactura/ComponentesReparados2.jpg", "/proyectos/Remanofactura/ComponentesReparados3.jpg"], available: true, area: "REMANUFACTURA" }
];
