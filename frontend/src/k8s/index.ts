import { KubeConfig, CoreV1Api, AppsV1Api } from '@kubernetes/client-node';

const kubeConfig = new KubeConfig();
kubeConfig.loadFromDefault();

const coreV1Api = kubeConfig.makeApiClient(CoreV1Api);
const appsV1Api = kubeConfig.makeApiClient(AppsV1Api);

export async function listPods(namespace: string = 'default') {
  try {
    const response = await coreV1Api.listNamespacedPod(namespace);
    console.log('Pods:', response.body.items);
    return response.body.items;
  } catch (error) {
    console.error('Error listing pods:', error);
    throw error;
  }
}

export async function createDeployment(deploymentManifest: any, namespace: string = 'default') {
  try {
    const response = await appsV1Api.createNamespacedDeployment(namespace, deploymentManifest);
    console.log('Deployment created:', response.body);
    return response.body;
  } catch (error) {
    console.error('Error creating deployment:', error);
    throw error;
  }
}

export async function deleteDeployment(deploymentName: string, namespace: string = 'default') {
  try {
    const response = await appsV1Api.deleteNamespacedDeployment(deploymentName, namespace);
    console.log('Deployment deleted:', response.body);
    return response.body;
  } catch (error) {
    console.error('Error deleting deployment:', error);
    throw error;
  }
}

export default {
  listPods,
  createDeployment,
  deleteDeployment,
};
