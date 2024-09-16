import './index.css';
import { DraggableNode } from './draggableNode';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  toolbar: {
    padding: '10px',
    backgroundColor: '#f3f2f1',
    borderRadius: '8px',
    ...shorthands.border('1px', 'solid', '#ccc'),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '250px', /* Fixed width for the sidebar */
    position: 'fixed', /* Fixed sidebar */
    top: '60px', /* Adjust according to navbar height */
    left: '0',
    height: 'calc(100vh - 60px)', /* Full height minus navbar */
    overflowY: 'auto', /* Enable vertical scrolling if content overflows */
    zIndex: '999', /* Ensure it's above the content */
  },
  nodesContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column', /* Stack nodes vertically */
    gap: '10px',
    alignItems: 'center',
  },
  nodeButton: {
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#6a1b9a', /* Purple background */
    ...shorthands.border('1px', 'solid', '#6a1b9a'),
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    ':hover': {
      backgroundColor: '#4a148c', /* Darker shade for hover effect */
    },
  },
});

export const PipelineToolbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <div className={classes.nodesContainer}>
        <DraggableNode type="customInput" label="Input" className={classes.nodeButton} />
        <DraggableNode type="custom" label="Custom" className={classes.nodeButton} />  
        <DraggableNode type="decision" label="Decision" className={classes.nodeButton} />
        <DraggableNode type="llm" label="LLM" className={classes.nodeButton} />
        <DraggableNode type="text" label="Text" className={classes.nodeButton} />
        <DraggableNode type="customOutput" label="Output" className={classes.nodeButton} />
        
        
      </div>
    </div>
  );
};
