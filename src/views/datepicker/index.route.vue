<template>
    <div>
        <div class="date-picker">
            <span class="mlr20">时间粒度</span>
            <el-select
                    @change="changeSelect"
                    style="width:100px;margin-right:10px;"
                    v-model="selectTimeType"
                    placeholder="请选择"
            >
                <el-option
                        v-for="item in dateOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                />
            </el-select>
            <span class="mlr20">{{selectTimeType | filterType}}</span>
            <ice-date-picker placeholder="选择日期" v-model="modelValue" :type="selectTimeType" @change="changeDate($event)"></ice-date-picker>
        </div>
        <div class="date-picker">
            <span class="mlr20">按日</span>
            <ice-date-picker placeholder="选择日期" v-model="dateValue" type="date"></ice-date-picker>
        </div>
        <div class="date-picker">
            <span class="mlr20">按周</span>
            <ice-date-picker placeholder="选择日期" v-model="weekValue" type="week"></ice-date-picker>
        </div>
        <div class="date-picker">
            <span class="mlr20">按月</span>
            <ice-date-picker placeholder="选择日期" v-model="monthValue" type="month"></ice-date-picker>
        </div>
        <div class="date-picker">
            <span class="mlr20">按季度</span>
            <ice-date-picker placeholder="选择日期" v-model="quarterValue" type="quarter"></ice-date-picker>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DatePicker",
        title:'datePicker',
        data(){
            return {
                modelValue:'',
                dateValue:'',
                weekValue:'',
                monthValue:'',
                quarterValue:'',
                selectTimeType: 'date',
                dateOptions: [
                    {
                        value: 'date',
                        label: '日',
                    },
                    {
                        value: 'week',
                        label: '周',
                    },
                    {
                        value: 'month',
                        label: '月',
                    },
                    {
                        value: 'quarter',
                        label: '季',
                    },
                ],
            }
        },
        methods:{
            changeDate(e){
                console.log(e)
            },
            changeSelect(val){
                this.selectTimeType = val
                this.modelValue=''
            },
        },
        filters:{
            filterType(val){
                if(val == 'week') return '按周选择'
                else if(val == 'month') return '按月选择'
                else if(val == 'quarter') return '按季度选择'
                else return '按天选择'
            }
        },
    }
</script>

<style scoped lang="less">
    .date-picker{
        margin:20px;
        padding:20px;
        box-sizing: border-box;
        border:1px solid #ccc;
        .mlr20{
            margin:0 20px;
        }
    }
</style>
