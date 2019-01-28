# Hello World APL Template (with Hint Transformer)

You will update your First Alexa Presentation Language (APL) Document to use [Hint Transformer](https://developer.amazon.com/docs/alexa-presentation-language/apl-data-source.html#texttohint-transformer) from the **APL Authoring Tool**.
Then, you will render your Alexa Presentation Language (APL) Document using the [Alexa Node.js SDKv2](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). The APL Document will be rendered for the following request type : ```LaunchRequest```.


1. Go back to the [APL Authorhing Tool](https://developer.amazon.com/alexa/console/ask/displays)

2. Select `Start from Scratch`

![start-from-scratch](./images/button-start-from-scratch.png)

3. Slide the toggle from the Triple Pane Editor to the Single Pane View.

**Before**

![toggle-layout](./images/toggle-layout-view.png)

**After**

![toggle-code](./images/toggle-code-view.png)

4. Copy and Paste the code from this [link](../lambda/custom/documents/template_withhinttransformer.json) overwriting the empty APL document in the window.

5. Click on `Data JSON`

![data-json](./images/data-json.png)

6. Copy and Paste the code from this [link](../lambda/custom/datasources/datasource_withhinttransformer.json) overwriting the empty Data JSON in the window. You should now see a simulation of the display render in the viewport window!

![medium-hub](./images/hint-transformer-medium-hub.png)


7. Switch the viewport from Medium Hub to Small Round Hub.

![small-hub](./images/hint-transformer-small-hub.png)

## Bravo ! You have just created your first APL Template using Hint Transformer. You will now use it in your Skill.

1. Navigate to the `Code` Tab of your Skill

![backend_hosted_skill](./images/backend_hosted_skill.png)

2. Create a new File named [template_withhinttransformer.json](../lambda/custom/documents/template_withhinttransformer.json) in Folder ```lambda/documents``` and paste the `document` from the **APL Authoring Tool** into this file

3. Create a new File named [datasource_withhinttransformer.json](../lambda/custom/datasources/datasource_withhinttransformer.json) in Folder ```lambda/datasources``` and paste the `Data JSON` from the **APL Authoring Tool** into this file

4. Open your Skill ```index.js``` file

5. Locate the following Handler : `LaunchRequestHandler`

6. Update the document and datasource parameters of the APL Directive in ```handle(handlerInput)```  method

**Before**

```javascript
...
document: require('./documents/template_withwhenclauses.json'),
datasources: require('./documents/datasource.json')
...
```

**After**
```javascript
...
document: require('./documents/template_withhinttransformer.json'),
datasources: require('./datasources/datasource_withhinttransformer.json')
...
```

7. Save your code

![save_backend](./images/save_backend.png)

>  **Important**: The developer console does not automatically save your work as you make changes. If you close the browser window without clicking Save, your work is lost.

8. Deploy your code

![deploy_backend](./images/deploy_backend.png)

> **Important**: You must successfully deploy the code before you can test it.

9. Navigate to the `Test` tab of your Skill

10. Test your Skill

![simulator](./images/simulator-hint-transformer.png)

## Bravo ! You have just rendered your first APL Template with Alexa Hint Transformer.

#### Next Step : [Use Speech Transformer in your APL Template](./10-speech-transformer.md)
