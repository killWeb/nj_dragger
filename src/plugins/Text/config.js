export default {
    name: "NjText", // 组件名
    desc: "文本",
    icon: "icon-wenben",
    animate: "", // 图层的动画,可以支持多个动画
    events: [], // 事件配置数据，每个图层可以添加多个事件
    configMap: { // 组件配置信息
        text: {
            key: "text",
            value: "文本组件的默认文案",
            valueType: "string",
            formType: "textarea",
            placeholder: "请输入文本文案",
            tip: "请输入文本文案",
            label: "文本文案"
        }
    },
    styleInfo: { // 样式
        "display": "block",
        "text-align": "center",
        "position": "relative",
        "z-index": "0",
        "width": "100%",
        "height": "auto",
        "line-height": "2",
        "padding-left": "12px",
        "padding-right": "12px",
        "padding-top": "12px",
        "padding-bottom": "12px",
        "text-indent": "20px"
    }
};
