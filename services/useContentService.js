import useService from "./useService";

const useContentService = async (documentType, slug) => {
    const body = { documentType, slug };
    const response = await useService('/api/getContent', 'POST', body);

    return response;
}

export default useContentService;