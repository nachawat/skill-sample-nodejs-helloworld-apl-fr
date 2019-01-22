/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Bienvenue sur ma première skill, vous pouvez me dire bonjour!';
    const repromptText = 'Dites moi bonjour!';
    return showAPL(handlerInput, speechText, repromptText);
    //return showAPLWithDatasource(handlerInput, speechText, repromptText);
    //return showAPLWithStyle(handlerInput, speechText, repromptText);
    //return showAPLWithStylePackage(handlerInput, speechText, repromptText);
    //return showAPLWithResource(handlerInput, speechText, repromptText);
    //return showAPLWithLayout(handlerInput, speechText, repromptText);
    //return showAPLWithLayoutPackage(handlerInput, speechText, repromptText);
    //return showAPLWithWhenClauses(handlerInput, speechText, repromptText);
    //return showAPLWithHintTransformer(handlerInput, speechText, repromptText);
    //return showAPLWithSpeechTransformer(handlerInput, speechText, repromptText);
    //return showAPLWithSpokenHorizontalList(handlerInput, speechText, repromptText);
  },
};

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'Bonjour à tous!';
    var builder = handlerInput.responseBuilder.speak(speechText);
    return builder.getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Vous pouvez me dire bonjour!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Au revoir !';

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    const speechText = "Désolé, je n\'ai pas compris. Pouvez-vous répéter?";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

const LogRequestInterceptor = {
  process(handlerInput) {
    // Log Request
    console.log("==== REQUEST ======");
    console.log(JSON.stringify(handlerInput.requestEnvelope, null, 2));
  }
}

const LogResponseInterceptor = {
  process(handlerInput, responseOutput) {
    // Log Response
    console.log("==== RESPONSE ======");
    console.log(JSON.stringify(responseOutput, null, 2));
  }
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .addRequestInterceptors(LogRequestInterceptor)
  .addResponseInterceptors(LogResponseInterceptor)
  .lambda();

function supportsAPL(handlerInput) {
  const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
  const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
  return aplInterface != null && aplInterface != undefined;
}

function showAPL(handlerInput, speechText, repromptText) {
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

function showAPLWithDatasource(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_basic_withdatasource.json'),
      datasources: require('./datasources/datasource.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithStyle(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_withstyle.json'),
      datasources: require('./datasources/datasource.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithStylePackage(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_withstylepackage.json'),
      datasources: require('./datasources/datasource.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithResource(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_withresource.json'),
      datasources: require('./datasources/datasource.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithLayout(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_withlayout.json'),
      datasources: require('./datasources/datasource.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithLayoutPackage(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_withlayoutpackage.json'),
      datasources: require('./datasources/datasource.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithWhenClauses(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_withwhenclauses.json'),
      datasources: require('./datasources/datasource.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithHintTransformer(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder.speak(speechText).reprompt(repromptText);
  if (supportsAPL(handlerInput)) {
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      document: require('./documents/template_withhinttransformer.json'),
      datasources: require('./datasources/datasource_withhinttransformer.json')
    })
  }
  return builder.getResponse();
}

function showAPLWithSpeechTransformer(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder;
  if (supportsAPL(handlerInput)) {
    builder = builder.withShouldEndSession(false);
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      token: 'SpeechDocumentToken',
      document: require('./documents/template_withspeechtransformer.json'),
      datasources: require('./datasources/datasource_withspeechtransformer.json')
    })
    .addDirective({
      type: 'Alexa.Presentation.APL.ExecuteCommands',
      version: '1.0',
      token: 'SpeechDocumentToken',
      commands: [{
        "type": "SpeakItem",
        "componentId": "idVoiceDemoText",
        "highlightMode": "line"
      }]
    })
  } else {
    builder.speak(speechText).reprompt(repromptText);
  }
  return builder.getResponse();
}

function showAPLWithSpokenHorizontalList(handlerInput, speechText, repromptText) {
  var builder = handlerInput.responseBuilder;
  if (supportsAPL(handlerInput)) {
    builder = builder.withShouldEndSession(false);
    builder.addDirective({
      type: 'Alexa.Presentation.APL.RenderDocument',
      version: '1.0',
      token: 'SpokenHorizontalListToken',
      document: require('./documents/template_spokenhorizontallist.json'),
      datasources: require('./datasources/datasource_spokenhorizontallist.json')
    })
      .addDirective({
        type: 'Alexa.Presentation.APL.ExecuteCommands',
        version: '1.0',
        token: 'SpokenHorizontalListToken',
        "commands": [
          {
            "type": "Sequential",
            "commands": [
              {
                "type": "SpeakItem",
                "componentId": "introComponent"
              },
              {
                "type": "SetPage",
                "componentId": "introComponent",
                "position": "relative",
                "value": 1
              },
              {
                "type": "SpeakItem",
                "componentId": "item0"
              },
              {
                "type": "SetPage",
                "componentId": "introComponent",
                "position": "relative",
                "value": 1
              },
              {
                "type": "SpeakItem",
                "componentId": "item1"
              },
              {
                "type": "SetPage",
                "componentId": "introComponent",
                "position": "relative",
                "value": 1
              },
              {
                "type": "SpeakItem",
                "componentId": "item2"
              }
            ]
          }
        ]
      })
  } else {
    builder.speak(speechText).reprompt(repromptText);
  }
  return builder.getResponse();
}
