var chart = {
        const root = pack(data);
        
        const svg = d3.select(DOM.svg(width, height))
            .style("width", "100%")
            .style("height", "auto")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle");
      
        const leaf = svg.selectAll("g")
          .data(root.leaves())
          .join("g")
            .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);
      
        leaf.append("circle")
            .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.7)
            .attr("fill", d => color(d.data.group));
      
        leaf.append("clipPath")
            .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
          .append("use")
            .attr("xlink:href", d => d.leafUid.href);
      
        leaf.append("text")
            .attr("clip-path", d => d.clipUid)
          .selectAll("tspan")
          .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
          .join("tspan")
            .attr("x", 0)
            .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
            .text(d => d);
      
        leaf.append("title")
            .text(d => `${d.data.title}\n${format(d.value)}`);
          
        return svg.node();
      }

var data = Array(252) [
  0: Object {name: "flare", title: "flare", group: undefined, value: 0}
  1: Object {name: "analytics", title: "flare/analytics", group: "analytics", value: 0}
  2: Object {name: "cluster", title: "flare/analytics/cluster", group: "analytics", value: 0}
  3: Object {name: "AgglomerativeCluster", title: "flare/analytics/cluster/AgglomerativeCluster", group: "analytics", value: 3938}
  4: Object {name: "CommunityStructure", title: "flare/analytics/cluster/CommunityStructure", group: "analytics", value: 3812}
  5: Object {name: "HierarchicalCluster", title: "flare/analytics/cluster/HierarchicalCluster", group: "analytics", value: 6714}
  6: Object {name: "MergeEdge", title: "flare/analytics/cluster/MergeEdge", group: "analytics", value: 743}
  7: Object {name: "graph", title: "flare/analytics/graph", group: "analytics", value: 0}
  8: Object {name: "BetweennessCentrality", title: "flare/analytics/graph/BetweennessCentrality", group: "analytics", value: 3534}
  9: Object {name: "LinkDistance", title: "flare/analytics/graph/LinkDistance", group: "analytics", value: 5731}
  10: Object {name: "MaxFlowMinCut", title: "flare/analytics/graph/MaxFlowMinCut", group: "analytics", value: 7840}
  11: Object {name: "ShortestPaths", title: "flare/analytics/graph/ShortestPaths", group: "analytics", value: 5914}
  12: Object {name: "SpanningTree", title: "flare/analytics/graph/SpanningTree", group: "analytics", value: 3416}
  13: Object {name: "optimization", title: "flare/analytics/optimization", group: "analytics", value: 0}
  14: Object {name: "AspectRatioBanker", title: "flare/analytics/optimization/AspectRatioBanker", group: "analytics", value: 7074}
  15: Object {name: "animate", title: "flare/animate", group: "animate", value: 0}
  16: Object {name: "Easing", title: "flare/animate/Easing", group: "animate", value: 17010}
  17: Object {name: "FunctionSequence", title: "flare/animate/FunctionSequence", group: "animate", value: 5842}
  18: Object {name: "interpolate", title: "flare/animate/interpolate", group: "animate", value: 0}
  19: Object {name: "ArrayInterpolator", title: "flare/animate/interpolate/ArrayInterpolator", group: "animate", value: 1983}
  20: Object {name: "ColorInterpolator", title: "flare/animate/interpolate/ColorInterpolator", group: "animate", value: 2047}
  21: Object {name: "DateInterpolator", title: "flare/animate/interpolate/DateInterpolator", group: "animate", value: 1375}
  22: Object {name: "Interpolator", title: "flare/animate/interpolate/Interpolator", group: "animate", value: 8746}
  23: Object {name: "MatrixInterpolator", title: "flare/animate/interpolate/MatrixInterpolator", group: "animate", value: 2202}
  24: Object {name: "NumberInterpolator", title: "flare/animate/interpolate/NumberInterpolator", group: "animate", value: 1382}
  25: Object {name: "ObjectInterpolator", title: "flare/animate/interpolate/ObjectInterpolator", group: "animate", value: 1629}
  26: Object {name: "PointInterpolator", title: "flare/animate/interpolate/PointInterpolator", group: "animate", value: 1675}
  27: Object {name: "RectangleInterpolator", title: "flare/animate/interpolate/RectangleInterpolator", group: "animate", value: 2042}
  28: Object {name: "ISchedulable", title: "flare/animate/ISchedulable", group: "animate", value: 1041}
  29: Object {name: "Parallel", title: "flare/animate/Parallel", group: "animate", value: 5176}
  30: Object {name: "Pause", title: "flare/animate/Pause", group: "animate", value: 449}
  31: Object {name: "Scheduler", title: "flare/animate/Scheduler", group: "animate", value: 5593}
  32: Object {name: "Sequence", title: "flare/animate/Sequence", group: "animate", value: 5534}
  33: Object {name: "Transition", title: "flare/animate/Transition", group: "animate", value: 9201}
  34: Object {name: "Transitioner", title: "flare/animate/Transitioner", group: "animate", value: 19975}
  35: Object {name: "TransitionEvent", title: "flare/animate/TransitionEvent", group: "animate", value: 1116}
  36: Object {name: "Tween", title: "flare/animate/Tween", group: "animate", value: 6006}
  37: Object {name: "data", title: "flare/data", group: "data", value: 0}
  38: Object {name: "converters", title: "flare/data/converters", group: "data", value: 0}
  39: Object {name: "Converters", title: "flare/data/converters/Converters", group: "data", value: 721}
  40: Object {name: "DelimitedTextConverter", title: "flare/data/converters/DelimitedTextConverter", group: "data", value: 4294}
  41: Object {name: "GraphMLConverter", title: "flare/data/converters/GraphMLConverter", group: "data", value: 9800}
  42: Object {name: "IDataConverter", title: "flare/data/converters/IDataConverter", group: "data", value: 1314}
  43: Object {name: "JSONConverter", title: "flare/data/converters/JSONConverter", group: "data", value: 2220}
  44: Object {name: "DataField", title: "flare/data/DataField", group: "data", value: 1759}
  45: Object {name: "DataSchema", title: "flare/data/DataSchema", group: "data", value: 2165}
  46: Object {name: "DataSet", title: "flare/data/DataSet", group: "data", value: 586}
  47: Object {name: "DataSource", title: "flare/data/DataSource", group: "data", value: 3331}
  48: Object {name: "DataTable", title: "flare/data/DataTable", group: "data", value: 772}
  49: Object {name: "DataUtil", title: "flare/data/DataUtil", group: "data", value: 3322}
  50: Object {name: "display", title: "flare/display", group: "display", value: 0}
  51: Object {name: "DirtySprite", title: "flare/display/DirtySprite", group: "display", value: 8833}
  52: Object {name: "LineSprite", title: "flare/display/LineSprite", group: "display", value: 1732}
  53: Object {name: "RectSprite", title: "flare/display/RectSprite", group: "display", value: 3623}
  54: Object {name: "TextSprite", title: "flare/display/TextSprite", group: "display", value: 10066}
  55: Object {name: "flex", title: "flare/flex", group: "flex", value: 0}
  56: Object {name: "FlareVis", title: "flare/flex/FlareVis", group: "flex", value: 4116}
  57: Object {name: "physics", title: "flare/physics", group: "physics", value: 0}
  58: Object {name: "DragForce", title: "flare/physics/DragForce", group: "physics", value: 1082}
  59: Object {name: "GravityForce", title: "flare/physics/GravityForce", group: "physics", value: 1336}
  60: Object {name: "IForce", title: "flare/physics/IForce", group: "physics", value: 319}
  61: Object {name: "NBodyForce", title: "flare/physics/NBodyForce", group: "physics", value: 10498}
  62: Object {name: "Particle", title: "flare/physics/Particle", group: "physics", value: 2822}
  63: Object {name: "Simulation", title: "flare/physics/Simulation", group: "physics", value: 9983}
  64: Object {name: "Spring", title: "flare/physics/Spring", group: "physics", value: 2213}
  65: Object {name: "SpringForce", title: "flare/physics/SpringForce", group: "physics", value: 1681}
  66: Object {name: "query", title: "flare/query", group: "query", value: 0}
  67: Object {name: "AggregateExpression", title: "flare/query/AggregateExpression", group: "query", value: 1616}
  68: Object {name: "And", title: "flare/query/And", group: "query", value: 1027}
  69: Object {name: "Arithmetic", title: "flare/query/Arithmetic", group: "query", value: 3891}
  70: Object {name: "Average", title: "flare/query/Average", group: "query", value: 891}
  71: Object {name: "BinaryExpression", title: "flare/query/BinaryExpression", group: "query", value: 2893}
  72: Object {name: "Comparison", title: "flare/query/Comparison", group: "query", value: 5103}
  73: Object {name: "CompositeExpression", title: "flare/query/CompositeExpression", group: "query", value: 3677}
  74: Object {name: "Count", title: "flare/query/Count", group: "query", value: 781}
  75: Object {name: "DateUtil", title: "flare/query/DateUtil", group: "query", value: 4141}
  76: Object {name: "Distinct", title: "flare/query/Distinct", group: "query", value: 933}
  77: Object {name: "Expression", title: "flare/query/Expression", group: "query", value: 5130}
  78: Object {name: "ExpressionIterator", title: "flare/query/ExpressionIterator", group: "query", value: 3617}
  79: Object {name: "Fn", title: "flare/query/Fn", group: "query", value: 3240}
  80: Object {name: "If", title: "flare/query/If", group: "query", value: 2732}
  81: Object {name: "IsA", title: "flare/query/IsA", group: "query", value: 2039}
  82: Object {name: "Literal", title: "flare/query/Literal", group: "query", value: 1214}
  83: Object {name: "Match", title: "flare/query/Match", group: "query", value: 3748}
  84: Object {name: "Maximum", title: "flare/query/Maximum", group: "query", value: 843}
  85: Object {name: "methods", title: "flare/query/methods", group: "query", value: 0}
  86: Object {name: "add", title: "flare/query/methods/add", group: "query", value: 593}
  87: Object {name: "and", title: "flare/query/methods/and", group: "query", value: 330}
  88: Object {name: "average", title: "flare/query/methods/average", group: "query", value: 287}
  89: Object {name: "count", title: "flare/query/methods/count", group: "query", value: 277}
  90: Object {name: "distinct", title: "flare/query/methods/distinct", group: "query", value: 292}
  91: Object {name: "div", title: "flare/query/methods/div", group: "query", value: 595}
  92: Object {name: "eq", title: "flare/query/methods/eq", group: "query", value: 594}
  93: Object {name: "fn", title: "flare/query/methods/fn", group: "query", value: 460}
  94: Object {name: "gt", title: "flare/query/methods/gt", group: "query", value: 603}
  95: Object {name: "gte", title: "flare/query/methods/gte", group: "query", value: 625}
  96: Object {name: "iff", title: "flare/query/methods/iff", group: "query", value: 748}
  97: Object {name: "isa", title: "flare/query/methods/isa", group: "query", value: 461}
  98: Object {name: "lt", title: "flare/query/methods/lt", group: "query", value: 597}
  99: Object {name: "lte", title: "flare/query/methods/lte", group: "query", value: 619}
  100: Object {name: "max", title: "flare/query/methods/max", group: "query", value: 283}
  101: Object {name: "min", title: "flare/query/methods/min", group: "query", value: 283}
  102: Object {name: "mod", title: "flare/query/methods/mod", group: "query", value: 591}
  103: Object {name: "mul", title: "flare/query/methods/mul", group: "query", value: 603}
  104: Object {name: "neq", title: "flare/query/methods/neq", group: "query", value: 599}
  105: Object {name: "not", title: "flare/query/methods/not", group: "query", value: 386}
  106: Object {name: "or", title: "flare/query/methods/or", group: "query", value: 323}
  107: Object {name: "orderby", title: "flare/query/methods/orderby", group: "query", value: 307}
  108: Object {name: "range", title: "flare/query/methods/range", group: "query", value: 772}
  109: Object {name: "select", title: "flare/query/methods/select", group: "query", value: 296}
  110: Object {name: "stddev", title: "flare/query/methods/stddev", group: "query", value: 363}
  111: Object {name: "sub", title: "flare/query/methods/sub", group: "query", value: 600}
  112: Object {name: "sum", title: "flare/query/methods/sum", group: "query", value: 280}
  113: Object {name: "update", title: "flare/query/methods/update", group: "query", value: 307}
  114: Object {name: "variance", title: "flare/query/methods/variance", group: "query", value: 335}
  115: Object {name: "where", title: "flare/query/methods/where", group: "query", value: 299}
  116: Object {name: "xor", title: "flare/query/methods/xor", group: "query", value: 354}
  117: Object {name: "_", title: "flare/query/methods/_", group: "query", value: 264}
  118: Object {name: "Minimum", title: "flare/query/Minimum", group: "query", value: 843}
  119: Object {name: "Not", title: "flare/query/Not", group: "query", value: 1554}
  120: Object {name: "Or", title: "flare/query/Or", group: "query", value: 970}
  121: Object {name: "Query", title: "flare/query/Query", group: "query", value: 13896}
  122: Object {name: "Range", title: "flare/query/Range", group: "query", value: 1594}
  123: Object {name: "StringUtil", title: "flare/query/StringUtil", group: "query", value: 4130}
  124: Object {name: "Sum", title: "flare/query/Sum", group: "query", value: 791}
  125: Object {name: "Variable", title: "flare/query/Variable", group: "query", value: 1124}
  126: Object {name: "Variance", title: "flare/query/Variance", group: "query", value: 1876}
  127: Object {name: "Xor", title: "flare/query/Xor", group: "query", value: 1101}
  128: Object {name: "scale", title: "flare/scale", group: "scale", value: 0}
  129: Object {name: "IScaleMap", title: "flare/scale/IScaleMap", group: "scale", value: 2105}
  130: Object {name: "LinearScale", title: "flare/scale/LinearScale", group: "scale", value: 1316}
  131: Object {name: "LogScale", title: "flare/scale/LogScale", group: "scale", value: 3151}
  132: Object {name: "OrdinalScale", title: "flare/scale/OrdinalScale", group: "scale", value: 3770}
  133: Object {name: "QuantileScale", title: "flare/scale/QuantileScale", group: "scale", value: 2435}
  134: Object {name: "QuantitativeScale", title: "flare/scale/QuantitativeScale", group: "scale", value: 4839}
  135: Object {name: "RootScale", title: "flare/scale/RootScale", group: "scale", value: 1756}
  136: Object {name: "Scale", title: "flare/scale/Scale", group: "scale", value: 4268}
  137: Object {name: "ScaleType", title: "flare/scale/ScaleType", group: "scale", value: 1821}
  138: Object {name: "TimeScale", title: "flare/scale/TimeScale", group: "scale", value: 5833}
  139: Object {name: "util", title: "flare/util", group: "util", value: 0}
  140: Object {name: "Arrays", title: "flare/util/Arrays", group: "util", value: 8258}
  141: Object {name: "Colors", title: "flare/util/Colors", group: "util", value: 10001}
  142: Object {name: "Dates", title: "flare/util/Dates", group: "util", value: 8217}
  143: Object {name: "Displays", title: "flare/util/Displays", group: "util", value: 12555}
  144: Object {name: "Filter", title: "flare/util/Filter", group: "util", value: 2324}
  145: Object {name: "Geometry", title: "flare/util/Geometry", group: "util", value: 10993}
  146: Object {name: "heap", title: "flare/util/heap", group: "util", value: 0}
  147: Object {name: "FibonacciHeap", title: "flare/util/heap/FibonacciHeap", group: "util", value: 9354}
  148: Object {name: "HeapNode", title: "flare/util/heap/HeapNode", group: "util", value: 1233}
  149: Object {name: "IEvaluable", title: "flare/util/IEvaluable", group: "util", value: 335}
  150: Object {name: "IPredicate", title: "flare/util/IPredicate", group: "util", value: 383}
  151: Object {name: "IValueProxy", title: "flare/util/IValueProxy", group: "util", value: 874}
  152: Object {name: "math", title: "flare/util/math", group: "util", value: 0}
  153: Object {name: "DenseMatrix", title: "flare/util/math/DenseMatrix", group: "util", value: 3165}
  154: Object {name: "IMatrix", title: "flare/util/math/IMatrix", group: "util", value: 2815}
  155: Object {name: "SparseMatrix", title: "flare/util/math/SparseMatrix", group: "util", value: 3366}
  156: Object {name: "Maths", title: "flare/util/Maths", group: "util", value: 17705}
  157: Object {name: "Orientation", title: "flare/util/Orientation", group: "util", value: 1486}
  158: Object {name: "palette", title: "flare/util/palette", group: "util", value: 0}
  159: Object {name: "ColorPalette", title: "flare/util/palette/ColorPalette", group: "util", value: 6367}
  160: Object {name: "Palette", title: "flare/util/palette/Palette", group: "util", value: 1229}
  161: Object {name: "ShapePalette", title: "flare/util/palette/ShapePalette", group: "util", value: 2059}
  162: Object {name: "SizePalette", title: "flare/util/palette/SizePalette", group: "util", value: 2291}
  163: Object {name: "Property", title: "flare/util/Property", group: "util", value: 5559}
  164: Object {name: "Shapes", title: "flare/util/Shapes", group: "util", value: 19118}
  165: Object {name: "Sort", title: "flare/util/Sort", group: "util", value: 6887}
  166: Object {name: "Stats", title: "flare/util/Stats", group: "util", value: 6557}
  167: Object {name: "Strings", title: "flare/util/Strings", group: "util", value: 22026}
  168: Object {name: "vis", title: "flare/vis", group: "vis", value: 0}
  169: Object {name: "axis", title: "flare/vis/axis", group: "vis", value: 0}
  170: Object {name: "Axes", title: "flare/vis/axis/Axes", group: "vis", value: 1302}
  171: Object {name: "Axis", title: "flare/vis/axis/Axis", group: "vis", value: 24593}
  172: Object {name: "AxisGridLine", title: "flare/vis/axis/AxisGridLine", group: "vis", value: 652}
  173: Object {name: "AxisLabel", title: "flare/vis/axis/AxisLabel", group: "vis", value: 636}
  174: Object {name: "CartesianAxes", title: "flare/vis/axis/CartesianAxes", group: "vis", value: 6703}
  175: Object {name: "controls", title: "flare/vis/controls", group: "vis", value: 0}
  176: Object {name: "AnchorControl", title: "flare/vis/controls/AnchorControl", group: "vis", value: 2138}
  177: Object {name: "ClickControl", title: "flare/vis/controls/ClickControl", group: "vis", value: 3824}
  178: Object {name: "Control", title: "flare/vis/controls/Control", group: "vis", value: 1353}
  179: Object {name: "ControlList", title: "flare/vis/controls/ControlList", group: "vis", value: 4665}
  180: Object {name: "DragControl", title: "flare/vis/controls/DragControl", group: "vis", value: 2649}
  181: Object {name: "ExpandControl", title: "flare/vis/controls/ExpandControl", group: "vis", value: 2832}
  182: Object {name: "HoverControl", title: "flare/vis/controls/HoverControl", group: "vis", value: 4896}
  183: Object {name: "IControl", title: "flare/vis/controls/IControl", group: "vis", value: 763}
  184: Object {name: "PanZoomControl", title: "flare/vis/controls/PanZoomControl", group: "vis", value: 5222}
  185: Object {name: "SelectionControl", title: "flare/vis/controls/SelectionControl", group: "vis", value: 7862}
  186: Object {name: "TooltipControl", title: "flare/vis/controls/TooltipControl", group: "vis", value: 8435}
  187: Object {name: "data", title: "flare/vis/data", group: "vis", value: 0}
  188: Object {name: "Data", title: "flare/vis/data/Data", group: "vis", value: 20544}
  189: Object {name: "DataList", title: "flare/vis/data/DataList", group: "vis", value: 19788}
  190: Object {name: "DataSprite", title: "flare/vis/data/DataSprite", group: "vis", value: 10349}
  191: Object {name: "EdgeSprite", title: "flare/vis/data/EdgeSprite", group: "vis", value: 3301}
  192: Object {name: "NodeSprite", title: "flare/vis/data/NodeSprite", group: "vis", value: 19382}
  193: Object {name: "render", title: "flare/vis/data/render", group: "vis", value: 0}
  194: Object {name: "ArrowType", title: "flare/vis/data/render/ArrowType", group: "vis", value: 698}
  195: Object {name: "EdgeRenderer", title: "flare/vis/data/render/EdgeRenderer", group: "vis", value: 5569}
  196: Object {name: "IRenderer", title: "flare/vis/data/render/IRenderer", group: "vis", value: 353}
  197: Object {name: "ShapeRenderer", title: "flare/vis/data/render/ShapeRenderer", group: "vis", value: 2247}
  198: Object {name: "ScaleBinding", title: "flare/vis/data/ScaleBinding", group: "vis", value: 11275}
  199: Object {name: "Tree", title: "flare/vis/data/Tree", group: "vis", value: 7147}
  200: Object {name: "TreeBuilder", title: "flare/vis/data/TreeBuilder", group: "vis", value: 9930}
  201: Object {name: "events", title: "flare/vis/events", group: "vis", value: 0}
  202: Object {name: "DataEvent", title: "flare/vis/events/DataEvent", group: "vis", value: 2313}
  203: Object {name: "SelectionEvent", title: "flare/vis/events/SelectionEvent", group: "vis", value: 1880}
  204: Object {name: "TooltipEvent", title: "flare/vis/events/TooltipEvent", group: "vis", value: 1701}
  205: Object {name: "VisualizationEvent", title: "flare/vis/events/VisualizationEvent", group: "vis", value: 1117}
  206: Object {name: "legend", title: "flare/vis/legend", group: "vis", value: 0}
  207: Object {name: "Legend", title: "flare/vis/legend/Legend", group: "vis", value: 20859}
  208: Object {name: "LegendItem", title: "flare/vis/legend/LegendItem", group: "vis", value: 4614}
  209: Object {name: "LegendRange", title: "flare/vis/legend/LegendRange", group: "vis", value: 10530}
  210: Object {name: "operator", title: "flare/vis/operator", group: "vis", value: 0}
  211: Object {name: "distortion", title: "flare/vis/operator/distortion", group: "vis", value: 0}
  212: Object {name: "BifocalDistortion", title: "flare/vis/operator/distortion/BifocalDistortion", group: "vis", value: 4461}
  213: Object {name: "Distortion", title: "flare/vis/operator/distortion/Distortion", group: "vis", value: 6314}
  214: Object {name: "FisheyeDistortion", title: "flare/vis/operator/distortion/FisheyeDistortion", group: "vis", value: 3444}
  215: Object {name: "encoder", title: "flare/vis/operator/encoder", group: "vis", value: 0}
  216: Object {name: "ColorEncoder", title: "flare/vis/operator/encoder/ColorEncoder", group: "vis", value: 3179}
  217: Object {name: "Encoder", title: "flare/vis/operator/encoder/Encoder", group: "vis", value: 4060}
  218: Object {name: "PropertyEncoder", title: "flare/vis/operator/encoder/PropertyEncoder", group: "vis", value: 4138}
  219: Object {name: "ShapeEncoder", title: "flare/vis/operator/encoder/ShapeEncoder", group: "vis", value: 1690}
  220: Object {name: "SizeEncoder", title: "flare/vis/operator/encoder/SizeEncoder", group: "vis", value: 1830}
  221: Object {name: "filter", title: "flare/vis/operator/filter", group: "vis", value: 0}
  222: Object {name: "FisheyeTreeFilter", title: "flare/vis/operator/filter/FisheyeTreeFilter", group: "vis", value: 5219}
  223: Object {name: "GraphDistanceFilter", title: "flare/vis/operator/filter/GraphDistanceFilter", group: "vis", value: 3165}
  224: Object {name: "VisibilityFilter", title: "flare/vis/operator/filter/VisibilityFilter", group: "vis", value: 3509}
  225: Object {name: "IOperator", title: "flare/vis/operator/IOperator", group: "vis", value: 1286}
  226: Object {name: "label", title: "flare/vis/operator/label", group: "vis", value: 0}
  227: Object {name: "Labeler", title: "flare/vis/operator/label/Labeler", group: "vis", value: 9956}
  228: Object {name: "RadialLabeler", title: "flare/vis/operator/label/RadialLabeler", group: "vis", value: 3899}
  229: Object {name: "StackedAreaLabeler", title: "flare/vis/operator/label/StackedAreaLabeler", group: "vis", value: 3202}
  230: Object {name: "layout", title: "flare/vis/operator/layout", group: "vis", value: 0}
  231: Object {name: "AxisLayout", title: "flare/vis/operator/layout/AxisLayout", group: "vis", value: 6725}
  232: Object {name: "BundledEdgeRouter", title: "flare/vis/operator/layout/BundledEdgeRouter", group: "vis", value: 3727}
  233: Object {name: "CircleLayout", title: "flare/vis/operator/layout/CircleLayout", group: "vis", value: 9317}
  234: Object {name: "CirclePackingLayout", title: "flare/vis/operator/layout/CirclePackingLayout", group: "vis", value: 12003}
  235: Object {name: "DendrogramLayout", title: "flare/vis/operator/layout/DendrogramLayout", group: "vis", value: 4853}
  236: Object {name: "ForceDirectedLayout", title: "flare/vis/operator/layout/ForceDirectedLayout", group: "vis", value: 8411}
  237: Object {name: "IcicleTreeLayout", title: "flare/vis/operator/layout/IcicleTreeLayout", group: "vis", value: 4864}
  238: Object {name: "IndentedTreeLayout", title: "flare/vis/operator/layout/IndentedTreeLayout", group: "vis", value: 3174}
  239: Object {name: "Layout", title: "flare/vis/operator/layout/Layout", group: "vis", value: 7881}
  240: Object {name: "NodeLinkTreeLayout", title: "flare/vis/operator/layout/NodeLinkTreeLayout", group: "vis", value: 12870}
  241: Object {name: "PieLayout", title: "flare/vis/operator/layout/PieLayout", group: "vis", value: 2728}
  242: Object {name: "RadialTreeLayout", title: "flare/vis/operator/layout/RadialTreeLayout", group: "vis", value: 12348}
  243: Object {name: "RandomLayout", title: "flare/vis/operator/layout/RandomLayout", group: "vis", value: 870}
  244: Object {name: "StackedAreaLayout", title: "flare/vis/operator/layout/StackedAreaLayout", group: "vis", value: 9121}
  245: Object {name: "TreeMapLayout", title: "flare/vis/operator/layout/TreeMapLayout", group: "vis", value: 9191}
  246: Object {name: "Operator", title: "flare/vis/operator/Operator", group: "vis", value: 2490}
  247: Object {name: "OperatorList", title: "flare/vis/operator/OperatorList", group: "vis", value: 5248}
  248: Object {name: "OperatorSequence", title: "flare/vis/operator/OperatorSequence", group: "vis", value: 4190}
  249: Object {name: "OperatorSwitch", title: "flare/vis/operator/OperatorSwitch", group: "vis", value: 2581}
  250: Object {name: "SortOperator", title: "flare/vis/operator/SortOperator", group: "vis", value: 2023}
  251: Object {
  name: "Visualization"
  title: "flare/vis/Visualization"
  group: "vis"
  value: 16540
}
  columns: Array(2) ["id", "value"]
]

var data = (await d3.csv("https://raw.githubusercontent.com/d3/d3-hierarchy/v1.1.8/test/data/flare.csv", ({id, value}) => ({name: id.split(".").pop(), title: id.replace(/\./g, "/"), group: id.split(".")[1], value: +value})))

var pack = ƒ(data)

var pack = data => d3.pack()
    .size([width - 2, height - 2])
    .padding(3)
  (d3.hierarchy({children: data})
    .sum(d => d.value))

var width = 932

width = 932

var height = 932

height = width

var format = ƒ(t)

format = d3.format(",d")

var color = ƒ(i)

color = d3.scaleOrdinal(data.map(d => d.group), d3.schemeCategory10)

var d3 = Object{
    event: null
    format: ƒ(t)
    formatPrefix: ƒ(t, n)
    timeFormat: ƒ(t)
    timeParse: ƒ(t)
    utcFormat: ƒ(t)
    utcParse: ƒ(t)
    version: "5.9.1"
    bisect: ƒ(n, e, r, i)
    bisectRight: ƒ(n, e, r, i)
    bisectLeft: ƒ(n, e, r, i)
    ascending: ƒ(t, n)
    bisector: ƒ(t)
    cross: ƒ(t, n, e)
    descending: ƒ(t, n)
    deviation: ƒ(t, n)
    extent: ƒ(t, n)
    histogram: ƒ()
    thresholdFreedmanDiaconis: ƒ(t, e, r)
    thresholdScott: ƒ(t, n, e)
    thresholdSturges: ƒ(t)
    max: ƒ(t, n)
    mean: ƒ(t, n)
    median: ƒ(t, e)
    merge: ƒ(t)
    min: ƒ(t, n)
    pairs: ƒ(t, n)
    permute: ƒ(t, n)
    quantile: ƒ(t, n, e)
    range: ƒ(t, n, e)
    scan: ƒ(t, e)
    shuffle: ƒ(t, n, e)
    sum: ƒ(t, n)
    ticks: ƒ(t, n, e)
    tickIncrement: ƒ(t, n, e)
    tickStep: ƒ(t, n, e)
    transpose: ƒ(t)
    variance: ƒ(t, n)
    zip: ƒ()
    axisTop: ƒ(t)
    axisRight: ƒ(t)
  axisBottom: ƒ(t)
  axisLeft: ƒ(t)
  brush: ƒ()
  brushX: ƒ()
  brushY: ƒ()
  brushSelection: ƒ(t)
  chord: ƒ()
  ribbon: ƒ()
  nest: ƒ()
  set: ƒ(t, n)
  map: ƒ(t, n)
  keys: ƒ(t)
  values: ƒ(t)
  entries: ƒ(t)
  color: ƒ(t)
  rgb: ƒ(t, n, e, r)
  hsl: ƒ(t, n, e, r)
  lab: ƒ(t, n, e, r)
  hcl: ƒ(t, n, e, r)
  lch: ƒ(t, n, e, r)
  gray: ƒ(t, n)
  cubehelix: ƒ(t, n, e, r)
  contours: ƒ()
  contourDensity: ƒ()
  dispatch: ƒ()
  drag: ƒ()
  dragDisable: ƒ(t)
  dragEnable: ƒ(t, n)
  dsvFormat: ƒ(t)
  csvParse: ƒ(t, n)
  csvParseRows: ƒ(t, n)
  csvFormat: ƒ(n, e)
  csvFormatBody: ƒ(t, n)
  csvFormatRows: ƒ(t)
  tsvParse: ƒ(t, n)
  tsvParseRows: ƒ(t, n)
  tsvFormat: ƒ(n, e)
  tsvFormatBody: ƒ(t, n)
  tsvFormatRows: ƒ(t)
  autoType: ƒ(t)
  easeLinear: ƒ(t)
  easeQuad: ƒ(t)
  easeQuadIn: ƒ(t)
  easeQuadOut: ƒ(t)
  easeQuadInOut: ƒ(t)
  easeCubic: ƒ(t)
  easeCubicIn: ƒ(t)
  easeCubicOut: ƒ(t)
  easeCubicInOut: ƒ(t)
  easePoly: ƒ(t)
  easePolyIn: ƒ(t)
  easePolyOut: ƒ(t)
  easePolyInOut: ƒ(t)
  easeSin: ƒ(t)
  easeSinIn: ƒ(t)
  easeSinOut: ƒ(t)
  easeSinInOut: ƒ(t)
  easeExp: ƒ(t)
  easeExpIn: ƒ(t)
  easeExpOut: ƒ(t)
  easeExpInOut: ƒ(t)
  easeCircle: ƒ(t)
  easeCircleIn: ƒ(t)
  easeCircleOut: ƒ(t)
  easeCircleInOut: ƒ(t)
  easeBounce: ƒ(t)
  easeBounceIn: ƒ(t)
  easeBounceOut: ƒ(t)
  easeBounceInOut: ƒ(t)
  easeBack: ƒ(t)
  easeBackIn: ƒ(t)
  easeBackOut: ƒ(t)
  easeBackInOut: ƒ(t)
  easeElastic: ƒ(t)
  easeElasticIn: ƒ(t)
  easeElasticOut: ƒ(t)
  easeElasticInOut: ƒ(t)
  blob: ƒ(t, n)
  buffer: ƒ(t, n)
  dsv: ƒ(t, n, e, r)
  csv: ƒ(n, e, r)
  tsv: ƒ(n, e, r)
  image: ƒ(t, n)
  json: ƒ(t, n)
  text: ƒ(t, n)
  xml: ƒ(n, e)
  html: ƒ(n, e)
  svg: ƒ(n, e)
  forceCenter: ƒ(t, n)
  forceCollide: ƒ(t)
  forceLink: ƒ(t)
  forceManyBody: ƒ()
  forceRadial: ƒ(t, n, e)
  forceSimulation: ƒ(t)
  forceX: ƒ(t)
  forceY: ƒ(t)
  formatDefaultLocale: ƒ(n)
  formatLocale: ƒ(t)
  formatSpecifier: ƒ(t)
  precisionFixed: ƒ(t)
  precisionPrefix: ƒ(t, n)
  precisionRound: ƒ(t, n)
  geoArea: ƒ(t)
  geoBounds: ƒ(t)
  geoCentroid: ƒ(t)
  geoCircle: ƒ()
  geoClipAntimeridian: ƒ(i)
  geoClipCircle: ƒ(t)
  geoClipExtent: ƒ()
  geoClipRectangle: ƒ(t, n, e, r)
  geoContains: ƒ(t, n)
  geoDistance: ƒ(t, n)
  geoGraticule: ƒ()
  geoGraticule10: ƒ()
  geoInterpolate: ƒ(t, n)
  geoLength: ƒ(t)
  geoPath: ƒ(t, n)
  geoAlbers: ƒ()
  geoAlbersUsa: ƒ()
  geoAzimuthalEqualArea: ƒ()
  geoAzimuthalEqualAreaRaw: ƒ(n, e)
  geoAzimuthalEquidistant: ƒ()
  geoAzimuthalEquidistantRaw: ƒ(n, e)
  geoConicConformal: ƒ()
  geoConicConformalRaw: ƒ(t, n)
  geoConicEqualArea: ƒ()
  geoConicEqualAreaRaw: ƒ(t, n)
  geoConicEquidistant: ƒ()
  geoConicEquidistantRaw: ƒ(…)
  geoEqualEarth: ƒ()
  geoEqualEarthRaw: ƒ(t, n)
  geoEquirectangular: ƒ()
  geoEquirectangularRaw: ƒ(t, n)
  geoGnomonic: ƒ()
  geoGnomonicRaw: ƒ(t, n)
  geoIdentity: ƒ()
  geoProjection: ƒ(t)
  geoProjectionMutator: ƒ(t)
  geoMercator: ƒ()
  geoMercatorRaw: ƒ(t, n)
  geoNaturalEarth1: ƒ()
  geoNaturalEarth1Raw: ƒ(t, n)
  geoOrthographic: ƒ()
  geoOrthographicRaw: ƒ(t, n)
  geoStereographic: ƒ()
  geoStereographicRaw: ƒ(t, n)
  geoTransverseMercator: ƒ()
  geoTransverseMercatorRaw: ƒ(t, n)
  geoRotation: ƒ(t)
  geoStream: ƒ(t, n)
  geoTransform: ƒ(t)
  cluster: ƒ()
  hierarchy: ƒ(t, n)
  pack: ƒ()
  packSiblings: ƒ(t)
  packEnclose: ƒ(t)
  partition: ƒ()
  stratify: ƒ()
  tree: ƒ()
  treemap: ƒ()
  treemapBinary: ƒ(t, n, e, r, i)
  treemapDice: ƒ(t, n, e, r, i)
  treemapSlice: ƒ(t, n, e, r, i)
  treemapSliceDice: ƒ(t, n, e, r, i)
  treemapSquarify: ƒ(t, e, r, i, o)
  treemapResquarify: ƒ(t, e, r, i, o)
  interpolate: ƒ(t, n)
  interpolateArray: ƒ(t, n)
  interpolateBasis: ƒ(t)
  interpolateBasisClosed: ƒ(t)
  interpolateDate: ƒ(t, n)
  interpolateDiscrete: ƒ(t)
  interpolateHue: ƒ(t, n)
  interpolateNumber: ƒ(t, n)
  interpolateObject: ƒ(t, n)
  interpolateRound: ƒ(t, n)
  interpolateString: ƒ(t, n)
  interpolateTransformCss: ƒ(o, a)
  interpolateTransformSvg: ƒ(o, a)
  interpolateZoom: ƒ(t, n)
  interpolateRgb: ƒ(t, n)
  interpolateRgbBasis: ƒ(n)
  interpolateRgbBasisClosed: ƒ(n)
  interpolateHsl: ƒ(n, e)
  interpolateHslLong: ƒ(n, e)
  interpolateLab: ƒ(t, n)
  interpolateHcl: ƒ(n, e)
  interpolateHclLong: ƒ(n, e)
  interpolateCubehelix: ƒ(n, r)
  interpolateCubehelixLong: ƒ(n, r)
  piecewise: ƒ(t, n)
  quantize: ƒ(t, n)
  path: ƒ()
  polygonArea: ƒ(t)
  polygonCentroid: ƒ(t)
  polygonHull: ƒ(t)
  polygonContains: ƒ(t, n)
  polygonLength: ƒ(t)
  quadtree: ƒ(t, n, e)
  randomUniform: ƒ(t, e)
  randomNormal: ƒ(t, e)
  randomLogNormal: ƒ()
  randomBates: ƒ(t)
  randomIrwinHall: ƒ(t)
  randomExponential: ƒ(t)
  scaleBand: ƒ()
  scalePoint: ƒ()
  scaleIdentity: ƒ(n)
  scaleLinear: ƒ()
  scaleLog: ƒ()
  scaleSymlog: ƒ()
  scaleOrdinal: ƒ()
  scaleImplicit: Object {name: "implicit"}
  scalePow: ƒ()
  scaleSqrt: ƒ()
  scaleQuantile: ƒ()
  scaleQuantize: ƒ()
  scaleThreshold: ƒ()
  scaleTime: ƒ()
  scaleUtc: ƒ()
  scaleSequential: ƒ()
  scaleSequentialLog: ƒ()
  scaleSequentialPow: ƒ()
  scaleSequentialSqrt: ƒ()
  scaleSequentialSymlog: ƒ()
  scaleSequentialQuantile: ƒ()
  scaleDiverging: ƒ()
  scaleDivergingLog: ƒ()
  scaleDivergingPow: ƒ()
  scaleDivergingSqrt: ƒ()
  scaleDivergingSymlog: ƒ()
  tickFormat: ƒ(n, e, r, i)
  schemeCategory10: Array(10) ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
  schemeAccent: Array(8) ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"]
  schemeDark2: Array(8) ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
  schemePaired: Array(12) ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]
  schemePastel1: Array(9) ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
  schemePastel2: Array(8) ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"]
  schemeSet1: Array(9) ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"]
  schemeSet2: Array(8) ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]
  schemeSet3: Array(12) ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"]
  interpolateBrBG: ƒ(t)
  schemeBrBG: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolatePRGn: ƒ(t)
  schemePRGn: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolatePiYG: ƒ(t)
  schemePiYG: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolatePuOr: ƒ(t)
  schemePuOr: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolateRdBu: ƒ(t)
  schemeRdBu: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolateRdGy: ƒ(t)
  schemeRdGy: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolateRdYlBu: ƒ(t)
  schemeRdYlBu: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolateRdYlGn: ƒ(t)
  schemeRdYlGn: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolateSpectral: ƒ(t)
  schemeSpectral: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolateSpectral: ƒ(t)
  schemeSpectral: Array(12) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11)]
  interpolateBuGn: ƒ(t)
  schemeBuGn: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateBuPu: ƒ(t)
  schemeBuPu: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateGnBu: ƒ(t)
  schemeGnBu: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateOrRd: ƒ(t)
  schemeOrRd: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolatePuBuGn: ƒ(t)
  schemePuBuGn: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolatePuBu: ƒ(t)
  schemePuBu: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolatePuRd: ƒ(t)
  schemePuRd: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateRdPu: ƒ(t)
  schemeRdPu: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateYlGnBu: ƒ(t)
  schemeYlGnBu: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateYlGn: ƒ(t)
  schemeYlGn: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateYlOrBr: ƒ(t)
  schemeYlOrBr: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateYlOrRd: ƒ(t)
  schemeYlOrRd: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateBlues: ƒ(t)
  schemeBlues: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateGreens: ƒ(t)
  schemeGreens: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateGreys: ƒ(t)
  schemeGreys: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolatePurples: ƒ(t)
  schemePurples: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateReds: ƒ(t)
  schemeReds: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateOranges: ƒ(t)
  schemeOranges: Array(10) [empty × 3, Array(3), Array(4), Array(5), Array(6), Array(7), Array(8), Array(9)]
  interpolateCubehelixDefault: ƒ(t)
  interpolateRainbow: ƒ(t)
  interpolateWarm: ƒ(t)
  interpolateCool: ƒ(t)
  interpolateSinebow: ƒ(t)
  interpolateViridis: ƒ(e)
  interpolateMagma: ƒ(e)
  interpolateInferno: ƒ(e)
  interpolatePlasma: ƒ(e)
  create: ƒ(t)
  creator: ƒ(t)
  local: ƒ()
  matcher: ƒ(t)
  mouse: ƒ(t)
  namespace: ƒ(…)
  namespaces: Object {svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/"}
  clientPoint: ƒ(t, n)
  select: ƒ(t)
  selectAll: ƒ(t)
  selection: ƒ()
  selector: ƒ(t)
  selectorAll: ƒ(t)
  style: ƒ(t, n)
  touch: ƒ(t, n, e)
  touches: ƒ(t, n)
  window: ƒ(t)
  customEvent: ƒ(n, e, r, i)
  arc: ƒ()
  area: ƒ()
  line: ƒ()
  pie: ƒ()
  areaRadial: ƒ()
  radialArea: ƒ()
  lineRadial: ƒ()
  radialLine: ƒ()
  pointRadial: ƒ(t, n)
  linkHorizontal: ƒ()
  linkVertical: ƒ()
  linkRadial: ƒ()
  symbol: ƒ()
  symbols: Array(7) [Object, Object, Object, Object, Object, Object, Object]
  symbolCircle: Object {draw: ƒ(t, n)}
  symbolCross: Object {draw: ƒ(t, n)}
  symbolDiamond: Object {draw: ƒ(t, n)}
  symbolSquare: Object {draw: ƒ(t, n)}
  symbolStar: Object {draw: ƒ(t, n)}
  symbolTriangle: Object {draw: ƒ(t, n)}
  symbolWye: Object {draw: ƒ(t, n)}
  curveBasisClosed: ƒ(t)
  curveBasisOpen: ƒ(t)
  curveBasis: ƒ(t)
  curveBundle: ƒ(t)
  curveCardinalClosed: ƒ(t)
  curveCardinalOpen: ƒ(t)
  curveCardinal: ƒ(t)
  curveCatmullRomClosed: ƒ(t)
  curveCatmullRomOpen: ƒ(t)
  curveCatmullRom: ƒ(t)
  curveLinearClosed: ƒ(t)
  curveLinear: ƒ(t)
  curveMonotoneX: ƒ(t)
  curveMonotoneY: ƒ(t)
  curveNatural: ƒ(t)
  curveStep: ƒ(t)
  curveStepAfter: ƒ(t)
  curveStepBefore: ƒ(t)
  stack: ƒ()
  stackOffsetExpand: ƒ(t, n)
  stackOffsetDiverging: ƒ(t, n)
  stackOffsetNone: ƒ(t, n)
  stackOffsetSilhouette: ƒ(t, n)
  stackOffsetWiggle: ƒ(t, n)
  stackOrderAppearance: ƒ(t)
  stackOrderAscending: ƒ(t)
  stackOrderDescending: ƒ(t)
  stackOrderInsideOut: ƒ(t)
  stackOrderNone: ƒ(t)
  stackOrderReverse: ƒ(t)
  timeInterval: ƒ(…)
  timeMillisecond: ƒ(n)
  timeMilliseconds: ƒ(e, r, o)
  utcMillisecond: ƒ(n)
  utcMilliseconds: ƒ(e, r, o)
  timeSecond: ƒ(n)
  timeSeconds: ƒ(e, r, o)
  utcSecond: ƒ(n)
  utcSeconds: ƒ(e, r, o)
  timeMinute: ƒ(n)
  timeMinutes: ƒ(e, r, o)
  timeHour: ƒ(n)
  timeHours: ƒ(e, r, o)
  timeDay: ƒ(n)
  timeDays: ƒ(e, r, o)
  timeWeek: ƒ(n)
  timeWeeks: ƒ(e, r, o)
  timeSunday: ƒ(n)
  timeSundays: ƒ(e, r, o)
  timeMonday: ƒ(n)
  timeMondays: ƒ(e, r, o)
  timeTuesday: ƒ(n)
  timeTuesdays: ƒ(e, r, o)
  timeWednesday: ƒ(n)
  timeWednesdays: ƒ(e, r, o)
  timeThursday: ƒ(n)
  timeThursdays: ƒ(e, r, o)
  timeFriday: ƒ(n)
  timeFridays: ƒ(e, r, o)
  timeSaturday: ƒ(n)
  timeSaturdays: ƒ(e, r, o)
  timeMonth: ƒ(n)
  timeMonths: ƒ(e, r, o)
  timeYear: ƒ(n)
  timeYears: ƒ(e, r, o)
  utcMinute: ƒ(n)
  utcMinutes: ƒ(e, r, o)
  utcHour: ƒ(n)
  utcHours: ƒ(e, r, o)
  utcDay: ƒ(n)
  utcDays: ƒ(e, r, o)
  utcWeek: ƒ(n)
  utcWeeks: ƒ(e, r, o)
  utcSunday: ƒ(n)
  utcSundays: ƒ(e, r, o)
  utcMonday: ƒ(n)
  utcMondays: ƒ(e, r, o)
  utcTuesday: ƒ(n)
  utcTuesdays: ƒ(e, r, o)
  utcWednesday: ƒ(n)
  utcWednesdays: ƒ(e, r, o)
  utcThursday: ƒ(n)
  utcThursdays: ƒ(e, r, o)
  utcFriday: ƒ(n)
  utcFridays: ƒ(e, r, o)
  utcSaturday: ƒ(n)
  utcSaturdays: ƒ(e, r, o)
  utcMonth: ƒ(n)
  utcMonths: ƒ(e, r, o)
  utcYear: ƒ(n)
  utcYears: ƒ(e, r, o)
  timeFormatDefaultLocale: ƒ(n)
  timeFormatLocale: ƒ(t)
  isoFormat: ƒ(t)
  isoParse: ƒ(t)
  now: ƒ()
  timer: ƒ(t, n, e)
  timerFlush: ƒ()
  timeout: ƒ(t, n, e)
  interval: ƒ(t, n, e)
  transition: ƒ(t)
  active: ƒ(t, n)
  interrupt: ƒ(t, n)
  voronoi: ƒ()
  zoom: ƒ()
  zoomTransform: ƒ(t)
  zoomIdentity: Sb {k: 1, x: 0, y: 0}
}

d3 = require("d3@5")
    


