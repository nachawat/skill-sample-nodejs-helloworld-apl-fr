# Skill Creation (with ASK CLI)

You will create and test your First APL Alexa Skill using the Alexa Skill Kit (ASK) [Command Line Interface](https://developer.amazon.com/fr/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) (CLI).

1. Install the [ASK CLI](https://developer.amazon.com/fr/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) on your machine

> **Important:** If you already have install the ASK CLI, make sure you are running the latest version of the CLI by executing the following command : `npm update -g ask-cli`

2. Install [Git](https://www.atlassian.com/git/tutorials/install-git) on your machine

3. Clone this repository using the following command

```
git clone https://github.com/nachawat/skill-sample-nodejs-helloworld-apl-fr.git
```

4. Explore the repository

```
cd https://github.com/nachawat/skill-sample-nodejs-helloworld-apl-fr
ls -al
```

5. Deploy the Skill and lambda function

```
ask deploy
```

> **Important:** ASK CLI will create the skill and the lambda function for you. The Lambda function will be created in `us-east-1 (Northern Virginia)` by default.

6. Open the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask)

7. Click on your newly created Skill.

8. Navigate to the `Test` Tab and enter the following utterance in the simulator ```ouvre a. p. l.```

![skill_test_simulator](./images/simulator-hint-transformer.png)

