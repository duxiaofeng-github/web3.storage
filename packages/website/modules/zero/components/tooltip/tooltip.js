import clsx from 'clsx';
import InfoAIcon from 'assets/icons/infoA';

/**
 * @typedef {Object} InfoProps
 * @property {string} content
 * @property {string} [position]
 * @property {React.ReactNode} [icon]
 * @prop {string} [className]
 */

/**
 *
 * @param {InfoProps} props
 * @returns
 */
const Tooltip = ({ children, content, icon = null, className, position }) => {
  return (
    <div className={clsx(className, 'Tooltip', position)}>
      {!children && (icon || <InfoAIcon />)}
      {children}
      <span className="tooltip-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Tooltip;
