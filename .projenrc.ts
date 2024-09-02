import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Daniel Jonsén',
  authorAddress: 'djonser1@gmail.com',
  cdkVersion: '2.82.0',
  projenVersion: '^0.86.0',
  defaultReleaseBranch: 'main',
  description: 'CDK Constructs for integrating GitHub Actions and AWS.',
  jsiiVersion: '~5.5.0',
  name: '@catnekaise/actions-constructs',
  projenrcTs: true,
  license: 'Apache-2.0',
  repositoryUrl: 'https://github.com/catnekaise/actions-constructs.git',
  buildWorkflow: true,
  pullRequestTemplate: false,
  releaseToNpm: true,
  npmProvenance: true,
  npmAccess: NpmAccess.PUBLIC,
  release: true,
  depsUpgrade: false,
  gitignore: ['.idea'],
  githubOptions: {
    pullRequestLint: true,
    mergify: false,
  },
  keywords: [
    'amazon-cognito-identity',
    'aws',
    'aws-cdk',
    'aws-iam',
    'awscdk',
    'cdk',
    'cognito-identity',
    'github',
    'github-actions',
    'iam',
    'oidc',
    'openid-connect',
  ],
  publishToNuget: {
    dotNetNamespace: 'Catnekaise.CDK.ActionsConstructs',
    packageId: 'Catnekaise.CDK.ActionsConstructs',
  },
  publishToPypi: {
    distName: 'catnekaise.actions-constructs',
    module: 'catnekaise_actions_constructs',
  },
});
project.addPackageIgnore('/docs/');


project.addDevDeps('@catnekaise/cdk-iam-utilities@^0.0.29');
project.addPeerDeps('@catnekaise/cdk-iam-utilities@^0.0.29');

project.synth();
