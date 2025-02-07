export default {
    namespaced: true,

    actions: {
        search({commit}, options) {
            const sortString = options.sort ? `?sort=${options.sort}` : ""
            delete options.sort
            return this.$http.get(`/api/v1/triggers/search${sortString}`, {
                params: options
            }).then(response => {
                return response.data;
            })
        },
        async unlock({commit}, options) {
            return (await this.$http.post(`/api/v1/triggers/${options.namespace}/${options.flowId}/${options.triggerId}/unlock`)).data;
        }
    }
}
