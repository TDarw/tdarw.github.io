export const typeText = (context, textObject, targetText, startDelay = 0, index = 0, onComplete = null, onCompleteDelay = 0) => {
  context.input.enabled = false;

    // Function to calculate the typing speed based on word length
    const getNextSpeed = (text, currentIndex) => {
        let spaceIndex = text.indexOf(' ', currentIndex);
        if (spaceIndex === -1) spaceIndex = text.length;
        let wordLength = spaceIndex - currentIndex;
        return wordLength > 5 ? 1 : 50;
    }

    if (index < targetText.length) {
      context.time.delayedCall(startDelay, () => {
        textObject.setText(targetText.substring(0, index + 1));
        typeText(context, textObject, targetText, getNextSpeed(targetText, index), index + 1, onComplete, onCompleteDelay);
      });
    } else if (onComplete) {
      context.time.delayedCall(onCompleteDelay, () => {
        onComplete();
      });
    }
  }

export const createBox = (context, xb, yb, width, height, stroke, xt, yt, label, font, align, wrap, isInteractive = true) => {
    const box = context.add.rectangle(xb, yb, width, height, 0xFFFFFF)
    .setStrokeStyle(stroke, 0x000000)
    .setScrollFactor(0)
    .setOrigin(0.5, 0.5)  

  if (isInteractive) {
    box.setInteractive();
    // Interactivity for box: highlight on hover
    box.on('pointerover', () => {
      if (context.input.enabled) {
        box.setStrokeStyle(8, 0x000000, 1);
      }
    });
    // Revert style when the pointer is no longer over the box
    box.on('pointerout', () => {
      if (context.input.enabled) {
        box.setStrokeStyle(4, 0x000000, 1);
      }
    });
  }

  const text = context.add.text(xt, yt, label, { fontSize: font, fill: '#000000', wordWrap: { width: wrap }, align: align, lineSpacing: 5 })
    .setScrollFactor(0)
    .setOrigin(0, 0);
    

  return { box, text };
};

  
