# Hello World APL Template

You will render your First Alexa Presentation Language (APL) Document using the [Alexa Node.js SDKv2](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). The APL Document will be rendered for the following request type : ```LaunchRequest```.

1. Navigate to Folder ```lambda/custom```

2. Create a new Folder named ```documents```

3. Create a new File named [template_basic.json](../lambda/custom/documents/template_basic.json) in Folder ```documents``` and paste the document from the **APL Authoring Tool** into this file

4. Open your Skill ```index.js``` file

5. Create a new function to detect APL interface

```javascript
function supportsAPL(handlerInput) {
  const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
  const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
  return aplInterface != null && aplInterface != undefined;
}
```

6. Locate the following Handler : `LaunchRequestHandler`

7. Update the ```handle(handlerInput)```  method

**Before**

```javascript
  handle(handlerInput) {
    const speechText = 'Bienvenue sur ma première skill, vous pouvez me dire bonjour!';
    const repromptText = 'Dites moi bonjour!';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(repromptText)
      .getResponse();
  }
```

**After**
```javascript
  handle(handlerInput) {
    const speechText = 'Bienvenue sur ma première skill, vous pouvez me dire bonjour!';
    const repromptText = 'Dites moi bonjour!';
    var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
    if (supportsAPL(handlerInput)) {
    builder.addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./documents/template_basic.json'),
        datasources: {}
    })
    }
    return builder.getResponse();
}
```

8. Go back to the root folder of your Skill and Deploy your Skill backend code using ```ASK CLI```

```
ask deploy -t lambda
```

9. Open the [Developer Portal](https://developer.amazon.com/alexa/console/ask) and Navigate to your Skill Test Simulator page

10. Test your Skill

![simulator](./images/simulator-hello-world.png)

## Bravo ! You have just rendered your first APL Template

