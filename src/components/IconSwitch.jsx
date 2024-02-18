import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

function IconSwitch({ icon, onSwitch}) {
    return (
        <div className='icon__container' onClick={onSwitch}>
            {icon === "view__module" ? <ViewListIcon/> : <ViewModuleIcon/>}
        </div>
    )

}

export default IconSwitch