import Driver from '../src/index';
function getDriver(Fn){
  Fn = Fn || new Function();
  const driver = new Driver({
    showRightTopCloseBtn: true,
    showIndicationButtons: true,
    className: 'tip_box',
    nextBtnClassName: 'indication_next_btn',
    animate: true,  // Animate while changing highlighted element
    opacity: 0.35,  // Background opacity (0 means only popovers and without overlay)
    padding: 5,    // Distance of element from around the edges
    allowClose: true, // Whether clicking on overlay should close or not
    overlayClickNext: false, // Should it move to next step on overlay click
    doneBtnText: 'Done', // Text on the final button
    closeBtnText: 'Close', // Text on the close button for this step
    nextBtnText: 'Next', // Next button text for this step
    prevBtnText: 'Previous', // Previous button text for this step
    showButtons: true, // Do not show control buttons in footer
    keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
    onHide: Fn
  });
  return driver;
}
const driver = getDriver(()=>{
  const driver = getDriver();
  driver.defineSteps([
    {
      element: '#four',
      popover: {
        title: 'Title on Popover',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non repellat ex itaque quo rem officiis necessitatibus quis iste et. Fuga animi dolor quaerat quibusdam modi consequuntur nesciunt omnis repellat?',
      }
    }
  ]);
  driver.start();
})

driver.defineSteps([
  {
    element: '#first',
    popover: {
      title: 'Title on Popover',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non repellat ex itaque quo rem officiis necessitatibus quis iste et. Fuga animi dolor quaerat quibusdam modi consequuntur nesciunt omnis repellat?',
    }
  },
  {
    element: '#second',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
    }
  },
  {
    element: '#third',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
    }
  }
]);
driver.start();