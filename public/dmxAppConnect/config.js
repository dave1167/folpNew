dmx.config({
  "list_mems": {
    "query": [
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "sort"
      }
    ]
  },
  "members_list": {
    "query": [
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "sort"
      }
    ]
  },
  "list_members": {
    "query": [
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "sort"
      }
    ]
  },
  "mem_list": {
    "query": [
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "sort2"
      },
      {
        "type": "text",
        "name": "dir2"
      }
    ]
  },
  "settings": {
    "membership_view": {
      "meta": [
        {
          "type": "number",
          "name": "settingsId"
        },
        {
          "type": "text",
          "name": "settingKey"
        },
        {
          "type": "object",
          "name": "settingJson"
        }
      ],
      "outputType": "array"
    }
  },
  "settings2": {
    "data_view1": {
      "meta": [
        {
          "type": "number",
          "name": "settingsId"
        },
        {
          "type": "text",
          "name": "settingKey"
        },
        {
          "type": "object",
          "name": "settingJson"
        },
        {
          "type": "text",
          "name": "section"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "updatedBy"
        },
        {
          "type": "datetime",
          "name": "updatedDate"
        }
      ],
      "outputType": "array"
    }
  }
});
