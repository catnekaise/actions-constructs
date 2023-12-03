import { awscdk } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Daniel Jonsén',
  authorAddress: 'djonser1@gmail.com',
  cdkVersion: '2.82.0',
  defaultReleaseBranch: 'main',
  description: 'CDK Constructs for integrating GitHub Actions and AWS.',
  jsiiVersion: '~5.2.0',
  name: '@catnekaise/actions-constructs',
  projenrcTs: true,
  license: 'Apache-2.0',
  repositoryUrl: 'https://github.com/catnekaise/actions-constructs.git',
  buildWorkflow: true,
  pullRequestTemplate: false,
  releaseToNpm: false,
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
});
project.addPackageIgnore('/docs/');

// All below is so that release with npm publish uses provenance.
const packageJsTask = project.addTask('package:js', {
  description: 'Create js language bindings',
  exec: 'jsii-pacmak -v --target js',
});

const packageAllTask = project.tasks.tryFind('package-all');

if (!packageAllTask) {
  throw new Error('Cannot proceed');
}

packageAllTask.spawn(packageJsTask);

const releaseWorkflow = project.github?.workflows.find(x => x.name === 'release');

if (releaseWorkflow) {
  releaseWorkflow.addJob('release_npm', {
    uses: 'catnekaise/actions-constructs/.github/workflows/release-npm.yml@main',
    with: {},
    permissions: {
      contents: JobPermission.READ,
    },
    secrets: {
      NPM_TOKEN: '${{ secrets.NPM_TOKEN }}',
    },
    needs: ['release'],
    if: 'needs.release.outputs.latest_commit == github.sha',
  });
}

project.synth();
