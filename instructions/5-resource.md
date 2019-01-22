# Hello World APL Template (with Resources)

You will update your First Alexa Presentation Language (APL) Document to use [Resources](https://developer.amazon.com/docs/alexa-presentation-language/apl-resources.html) from the **APL Authoring Tool**.
Then, you will render your Alexa Presentation Language (APL) Document using the [Alexa Node.js SDKv2](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). The APL Document will be rendered for the following request type : ```LaunchRequest```.


1. Go back to the [APL Authorhing Tool](https://developer.amazon.com/alexa/console/ask/displays)

2. Select `Start from Scratch`

![start-from-scratch](./images/button-start-from-scratch.png)

3. Slide the toggle from the Triple Pane Editor to the Single Pane View.

**Before**

![toggle-layout](./images/toggle-layout-view.png)

**After**

![toggle-code](./images/toggle-code-view.png)

4. Copy and Paste the code from this [link](../lambda/custom/documents/template_withresource.json) overwriting the empty APL document in the window.

5. Click on `Data JSON`

![data-json](./images/data-json.png)

6. Copy and Paste the code from this [link](../lambda/custom/datasources/datasource_basic.json) overwriting the empty Data JSON in the window. You should now see a simulation of the display render in the viewport window!

![medium-hub](./images/style-package-medium-hub.png)


7. Switch the viewport from Medium Hub to Small Round Hub.

![small-hub](./images/style-package-small-hub.png)

## Bravo ! You have just created your first APL Template using Alexa Style Package. You will now use it in your Skill.


1. Navigate to Folder ```lambda/custom/documents```

2. Create a new File named [template_withresource.json](../lambda/custom/documents/template_withresource.json) in Folder ```documents``` and paste the `document` from the **APL Authoring Tool** into this file

3. Open your Skill ```index.js``` file

4. Locate the following Handler : `LaunchRequestHandler`

5. Update the document and datasource parameters of the APL Directive in ```handle(handlerInput)```  method

**Before**

```javascript
...
document: require('./documents/template_withstylepackage.json'),
...
```

**After**
```javascript
...
document: require('./documents/template_withresource.json'),
...
```

6. Go back to the root folder of your Skill and Deploy your Skill backend code using ```ASK CLI```

```
ask deploy -t lambda
```

7. Open the [Developer Portal](https://developer.amazon.com/alexa/console/ask) and Navigate to your Skill Test Simulator page

8. Test your Skill

![simulator](./images/simulator-style-package.png)

## Bravo ! You have just rendered your first APL Template with a Resource.
