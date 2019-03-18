<template>
    <div class="scoreboard">
        <div class="score-left">
            <div class="score">
                <div class="nav">
                    <ul>
                        <li>积分榜</li>
                        <li>射手榜</li>
                        <li>助攻榜</li>
                    </ul>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>排名</th>
                            <th class="team">球队</th>
                            <th>场次</th>
                            <th>胜</th>
                            <th>平</th>
                            <th>负</th>
                            <th>进球</th>
                            <th>失球</th>
                            <th>净胜球</th>
                            <th>积分</th>
                        </tr>
                        <tr v-for="item in 20" :key="item.id">
                            <td>1</td>
                            <td class="team">上海上岗</td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>17</td>
                            <td>17</td>
                            <td>17</td>
                            <td>88</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="score-right">
            <ul>
                <li>英超</li>
                <li>西甲</li>
                <li>意甲</li>
                <li>德甲</li>
                <li>法甲</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    .scoreboard{
        width: 12rem;
        min-height: 8rem;
        margin: auto;
        margin-top: 0.8rem;
        display: flex;
        justify-content: space-between;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .score-left{
            width: 9.8rem;
            .score{
                .nav{
                    ul{
                        background-color: #FAFAFA;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        padding: 0.2rem 0;
                        padding-right: 0.2rem;
                        li{
                            font-size: 0.2rem;
                            margin-left: 0.25rem;
                            cursor: pointer;
                        }
                    }
                }
                table{
                    width: 100%;
                    margin-top: 0.1rem;
                    border-collapse: collapse; 
                    padding: 0;
                    table-layout: fixed;
                    tr{
                        font-size: 0.16rem;
                        th{
                            text-align: center;
                            background-color: #FAFAFA;
                            padding: 0.18rem 0;
                        }
                        td{
                            text-align: center;
                            padding: 0.18rem 0;
                        }
                        .team{
                            width: 2rem;
                        }
                    }
                }
            }
        }
        .score-right{
            width: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.2rem;
            ul{
                li{
                    padding: 0.25rem;
                    cursor: pointer;
                    color: #666666;
                }
            }
        }
    }
</style>