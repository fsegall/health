import { Router } from 'express';

import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

import { CreateIndigenousAlimentacaoNutricaoController } from '../controllers/CreateIndigenousAlimentacaoNutricaoController';
import { CreateIndigenousApoioEProtecaoController } from '../controllers/CreateIndigenousApoioEProtecaoController';
import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigenousInterviewController';
import { CreateIndigeanousInterviewDemographyController } from '../controllers/CreateIndigenousInterviewDemographyController';
import { CreateIndigeanousInterviewResidenceController } from '../controllers/CreateIndigenousInterviewResidenceController';
import { CreateIndigenousSaudeDoencaController } from '../controllers/CreateIndigenousSaudeDoencaController';
import { HandleOfflinetInterviewsController } from '../controllers/HandleOfflineInterviewsController';
import { ListIndigenousInterviewController } from '../controllers/ListIndigenousInterviewController';

const indigeanousInterviewRouter = Router();

const createIndigenousInterviewController =
  new CreateIndigeanousInterviewController();
const createIndigenousInterviewDemographyController =
  new CreateIndigeanousInterviewDemographyController();
const createIndigenousInterviewResidenceController =
  new CreateIndigeanousInterviewResidenceController();
const createIndigenousSaudeDoencaController =
  new CreateIndigenousSaudeDoencaController();
const createIndigenousApoioFinanceiroController =
  new CreateIndigenousApoioEProtecaoController();
const createIndigenousAlimentacaoNutricaoController =
  new CreateIndigenousAlimentacaoNutricaoController();
const listIndigenousInterviewController =
  new ListIndigenousInterviewController();
const handleOfflineInterviewsController =
  new HandleOfflinetInterviewsController();

indigeanousInterviewRouter.use(ensureAuthenticated);

/**
 * @swagger
 * /indigenous-interviews/v2:
 *   post:
 *     summary: Criar entrevista indígena básica
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - municipio
 *               - aldeia_comunidade
 *               - tipo_comunidade
 *               - projeto_numero
 *               - project_id
 *               - data_entrevista
 *               - responsavel_documentos
 *     responses:
 *       201:
 *         description: Entrevista criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousInterviewController.handle,
);

/**
 * @swagger
 * /indigenous-interviews/v2/page/{page}/limit/{limit}:
 *   get:
 *     summary: Listar entrevistas indígenas com paginação
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: page
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: limit
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de entrevistas
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.get(
  '/page/:page/limit/:limit',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  listIndigenousInterviewController.handle,
);

/**
 * @swagger
 * /indigenous-interviews/v2/demography:
 *   post:
 *     summary: Criar dados demográficos da entrevista indígena
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Dados demográficos criados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.post(
  '/demography',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousInterviewDemographyController.handle,
);

/**
 * @swagger
 * /indigenous-interviews/v2/residence:
 *   post:
 *     summary: Criar dados de residência da entrevista indígena
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Dados de residência criados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.post(
  '/residence',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousInterviewResidenceController.handle,
);

/**
 * @swagger
 * /indigenous-interviews/v2/health-desease:
 *   post:
 *     summary: Criar dados de saúde e doença da entrevista indígena
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Dados de saúde criados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.post(
  '/health-desease',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousSaudeDoencaController.handle,
);

/**
 * @swagger
 * /indigenous-interviews/v2/support:
 *   post:
 *     summary: Criar dados de apoio e proteção social da entrevista indígena
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Dados de apoio criados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.post(
  '/support',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousApoioFinanceiroController.handle,
);

/**
 * @swagger
 * /indigenous-interviews/v2/nutrition:
 *   post:
 *     summary: Criar dados de alimentação e nutrição (EBIA-Indígena) da entrevista indígena
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               entrevista_indigena_id:
 *                 type: string
 *               possui_moradores_menores_de_16:
 *                 type: string
 *               preocupação_nao_conseguir_comida:
 *                 type: string
 *               deixaram_de_comer_comida_da_cultura:
 *                 type: string
 *                 description: EB2 - (ADULTO) No mês passado teve dia ou dias que vocês deixaram de comer comida tradicional (da sua cultura), porque não tinha?
 *               deixaram_de_comer_comida_saudavel:
 *                 type: string
 *                 description: EB3 - No mês passado, vocês nesta casa, deixaram de comer comida que faz bem para saúde, porque não tinha?
 *               faltou_comida_algum_dia:
 *                 type: string
 *                 description: EB4 - No mês passado, na sua casa, faltou comida algum dia ou alguns dias?
 *     responses:
 *       201:
 *         description: Dados de alimentação criados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.post(
  '/nutrition',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousAlimentacaoNutricaoController.handle,
);

/**
 * @swagger
 * /indigenous-interviews/v2/handle-offline-data:
 *   post:
 *     summary: Processar dados de entrevistas coletadas offline
 *     tags: [Entrevistas Indígenas v2]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *     responses:
 *       200:
 *         description: Dados processados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autenticado
 */
indigeanousInterviewRouter.post(
  '/handle-offline-data',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  handleOfflineInterviewsController.handle,
);

export { indigeanousInterviewRouter };
