export enum ModuleTypes {
    connectionmodule = 'Connection Module(连接模块)',
    production = 'Production(生产模块)',
    defencemodule = 'Defense Module(防御模块)',
    dockarea = 'Dock Area(停靠区)',
    habitation = 'Habitation(栖息地)',
    pier = 'Pier(码头)',
    storage = 'Storage(存储模块)',
    buildmodule = 'Build Module(建筑模块)',
    ventureplatform = 'Venture Platform',
    processingmodule = 'Processing(处理)',
    recycling = 'Recycling(回收)'
}

export const AllModuleTypes = [
    ModuleTypes.habitation,
    ModuleTypes.buildmodule,
    ModuleTypes.dockarea,
    ModuleTypes.pier,
    ModuleTypes.storage,
    ModuleTypes.defencemodule,
    ModuleTypes.connectionmodule,
    ModuleTypes.processingmodule,
    ModuleTypes.recycling
];
