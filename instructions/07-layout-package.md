# Hello World APL Template (with Layout Package)

You will update your First Alexa Presentation Language (APL) Document to use [Alexa Layout Packages](https://developer.amazon.com/docs/alexa-presentation-language/apl-layouts-overview.html) from the **APL Authoring Tool**.
Then, you will render your Alexa Presentation Language (APL) Document using the [Alexa Node.js SDKv2](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). The APL Document will be rendered for the following request type : ```LaunchRequest```.


1. Go back to the [APL Authoring Tool](https://developer.amazon.com/alexa/console/ask/displays)

2. Select `Start from Scratch`

![start-from-scratch](./images/button-start-from-scratch.png)

3. Slide the toggle from the Triple Pane Editor to the Single Pane View.

**Before**

![toggle-layout](./images/toggle-layout-view.png)

**After**

![toggle-code](./images/toggle-code-view.png)

4. Copy and Paste the code from this **[link](../lambda/custom/documents/template_withlayoutpackage.json)** overwriting the empty APL document in the window.

5. Click on `Data JSON`

![data-json](./images/data-json.png)

6. Copy and Paste the code from this **[link](../lambda/custom/datasources/datasource.json)** overwriting the empty Data JSON in the window. You should now see a simulation of the display render in the viewport window!

![medium-hub](./images/layout-package-medium-hub.png)


7. Switch the viewport from Medium Hub to Small Round Hub.

![small-hub](./images/layout-package-small-hub.png)

## Bravo ! You have just created your first APL Template using Alexa Style Package. You will now use it in your Skill.


1. Navigate to the `Code` Tab of your Skill

![backend_hosted_skill](./images/backend_hosted_skill.png)

2. Create a new File named **[template_withlayoutpackage.json](../lambda/custom/documents/template_withlayoutpackage.json)** in Folder ```lambda/documents``` and paste the `Start from Scratch` from the **APL Authoring Tool** into this file

3. Create a new File named **[datasource.json](../lambda/custom/datasources/datasource.json)** in Folder ```lambda/datasources``` and paste the `Data JSON` from the **APL Authoring Tool** into this file

4. Open file ```index.js```

5. Locate the following Handler : `LaunchRequestHandler`

6. Update the document and datasource parameters of the APL Directive in ```handle(handlerInput)```  method

**Before**

```javascript
...
document: require('./documents/template_withlayout.json'),
datasources: require('./datasources/datasource_basic.json')
...
```

**After**
```javascript
...
document: require('./documents/template_withlayoutpackage.json'),
datasources: require('./datasources/datasource.json')
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

![simulator](./images/simulator-layout-package.png)

## Bravo ! You have just rendered your first APL Template with Alexa Layout Package.

#### Next Step : [Use When Clauses in your APL Template](./08-when-clause.md)
